import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { CreateAdminUseCase } from "./use-cases/create-admin";

@Module({
  controllers: [AdminController],
  providers: [
    CreateAdminUseCase
  ],
})
export class AdminModule {}
