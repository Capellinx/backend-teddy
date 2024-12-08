import { Controller, Post, Body } from '@nestjs/common';
import { CreateAdminDto } from './domain/dto/create-admin.dto';
import { CreateAdminUseCase } from "./use-cases/create-admin";

@Controller('admin')
export class AdminController {
  constructor(private readonly createAdminUseCase: CreateAdminUseCase ) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.createAdminUseCase.execute(createAdminDto);
  }

}
