import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { FindByNameUseCase } from "../../../admin/use-cases/find-by-name";
import { Env } from "../../../env";
import * as bcrypt from "bcrypt";

@Injectable()
export class LoginAdminUseCase {
  private jwtExpirationTimeInSeconds: number;
  
  constructor(
    private readonly jwtService: JwtService,
    private readonly findByNameUseCase: FindByNameUseCase,
    private readonly configService: ConfigService<Env, true>,
  ) {
    this.jwtExpirationTimeInSeconds = Number(configService.get<string>(
      "JWT_EXPIRATION_TIME",
      { infer: true },
    ))
  }
  
  async execute(username: string, password: string): Promise<{token: string, expiresIn: number}> {
    const isExistAdmin = await this.findByNameUseCase.execute(username);
    
    if (!isExistAdmin) {
      throw new BadRequestException("User does not exist");
    }
    
    const decryptPassword = await bcrypt.compare(
      password,
      isExistAdmin.password,
    );
    
    if (!decryptPassword) {
      throw new BadRequestException("Problem to join application");
    }
    
    const payload = {
      sub: isExistAdmin.id,
      name: isExistAdmin.name,
    };
    
    const newToekn = await this.jwtService.sign(payload);
    
    return {
      token: newToekn,
      expiresIn: this.jwtExpirationTimeInSeconds,
    };
  }
}
