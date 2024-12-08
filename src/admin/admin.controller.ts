import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { CreateAdminDto } from './domain/dto/create-admin.dto';
import { Admin } from "./domain/entities/admin.entity";
import { CreateAdminUseCase } from "./use-cases/create-admin";
import { FindByNameUseCase } from "./use-cases/find-by-name";

@Controller('admin')
export class AdminController {
  constructor(
    private readonly createAdminUseCase: CreateAdminUseCase ,
    private readonly findByNameUseCase: FindByNameUseCase,
  ) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.createAdminUseCase.execute(createAdminDto);
  }
  
  @Get()
  findByName(
    @Query("name") name: string,
  ) {
    return this.findByNameUseCase.execute(name)
  }

}
