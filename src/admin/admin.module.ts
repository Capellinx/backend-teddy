import { Module } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Env } from "../env";
import { AdminController } from './admin.controller';
import { Admin } from "./domain/entities/admin.entity";
import { CreateAdminUseCase } from "./use-cases/create-admin";
import { FindByNameUseCase } from "./use-cases/find-by-name";
import { LoginAdminUseCase } from "./use-cases/login-admin";

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    JwtModule.registerAsync({
      global: true,
      imports: [],
      useFactory: (configService: ConfigService<Env, true>) => ({
        secret: configService.get<string>("JWT_SECRET", { infer: true }),
        signOptions: {
          expiresIn: Number(
            configService.get<number>("JWT_EXPIRATION_TIME", { infer: true }),
          ),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AdminController],
  providers: [
    CreateAdminUseCase,
    FindByNameUseCase,
    LoginAdminUseCase
  ],
  exports: [FindByNameUseCase],
})
export class AdminModule {}
