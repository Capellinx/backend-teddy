import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { CreateAdminDto } from './domain/dto/create-admin.dto';
import { Admin } from "./domain/entities/admin.entity";
import { CreateAdminUseCase } from "./use-cases/create-admin";
import { FindByNameUseCase } from "./use-cases/find-by-name";
import { LoginAdminUseCase } from "./use-cases/login-admin";

@Controller('admin')
export class AdminController {
  constructor(
    private readonly createAdminUseCase: CreateAdminUseCase ,
    private readonly findByNameUseCase: FindByNameUseCase,
    private readonly loginAdminUseCase: LoginAdminUseCase,
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
  
  @Post("login")
  signIn(
    @Body("username") username: string,
    @Body("password") password: string,
  ) {
    return this.loginAdminUseCase.execute(username, password);
  }

}
