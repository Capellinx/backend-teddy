import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from './admin.controller';
import { Admin } from "./domain/entities/admin.entity";
import { CreateAdminUseCase } from "./use-cases/create-admin";

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
  ],
  controllers: [AdminController],
  providers: [
    CreateAdminUseCase
  ],
})
export class AdminModule {}
