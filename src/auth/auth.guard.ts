import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Request } from "express";
import { Env } from "../env";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    readonly jwtService: JwtService,
    private configService: ConfigService<Env, true>,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException("Token not found");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>("JWT_SECRET", { infer: true }),
      });
      
      request['user'] = payload;
      
    } catch (error) {
      throw new UnauthorizedException("Token not found");
    }
    
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    return token === "Bearer" ? token : undefined;
  }
}
