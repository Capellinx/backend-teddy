import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminController } from './admin.controller';
import { Admin } from "./domain/entities/admin.entity";
import { CreateAdminUseCase } from "./use-cases/create-admin";
import { FindByNameUseCase } from "./use-cases/find-by-name";

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
  ],
  controllers: [AdminController],
  providers: [
    CreateAdminUseCase,
    FindByNameUseCase
  ],
})
export class AdminModule {}
