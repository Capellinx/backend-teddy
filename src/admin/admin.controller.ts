import { Controller, Post, Body, Get, Query } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { number, string } from "zod";
import { CreateAdminDto } from './domain/dto/create-admin.dto';
import { FindNameDto } from "./domain/dto/find-name.dto";
import { LoginAdminDto } from "./domain/dto/login-admin.dto";
import { LoginResponseDto } from "./domain/dto/login-response.dto";
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
  @ApiResponse({
    status: 200,
    description: 'Administrador encontrado com sucesso.',
    type: FindNameDto,
  })
  @ApiResponse({
    status: 404,
    description: 'administrador não encontrado.',
  })
  findByName(
    @Query("name") name: string,
  ) {
    return this.findByNameUseCase.execute(name)
  }
  
  @Post("login")
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso.',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Credenciais inválidas.',
  })
  signIn(
    @Body() {username, password}: LoginAdminDto,
  ) {
    return this.loginAdminUseCase.execute(username, password);
  }

}
