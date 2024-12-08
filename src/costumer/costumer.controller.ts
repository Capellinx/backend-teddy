import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from "@nestjs/common";
import { ApiParam, ApiQuery, ApiResponse } from "@nestjs/swagger";
import { LoginResponseDto } from "../admin/domain/dto/login-response.dto";
import { CreateCostumerDto } from './domain/dto/create-costumer.dto';
import { FindCostumerDto } from "./domain/dto/find-costumer.dto";
import { UpdateCostumerDto } from './domain/dto/update-costumer.dto';
import { ClearAllSelectedCostumersUseCase } from "./use-cases/clear-all-selected-costumers";
import { CreateCostumerUseCase } from "./use-cases/create-costumer";
import { DeleteCostumerUseCase } from "./use-cases/delete-costumer";
import { FindAllCostumersUseCase } from "./use-cases/find-all-costumers";
import { FindOneCostumerUseCase } from "./use-cases/find-one-costumer";
import { SelectCostumerUseCase } from "./use-cases/select-costumer";
import { UpdatedCostumerUseCase } from "./use-cases/update-costumer";

@Controller('costumer')
export class CostumerController {
  constructor(
    private readonly createCostumerUseCase: CreateCostumerUseCase,
    private readonly findOneCostumerUseCase: FindOneCostumerUseCase,
    private readonly findAllCostumersUseCase: FindAllCostumersUseCase,
    private readonly deleteCostumerUseCase: DeleteCostumerUseCase,
    private readonly updatedCostumerUseCase: UpdatedCostumerUseCase,
    private readonly selectCostumerUseCase: SelectCostumerUseCase,
    private readonly clearAllSelectedCostumersUseCase: ClearAllSelectedCostumersUseCase,
  ) {}

  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto) {
    return this.createCostumerUseCase.execute(createCostumerDto);
  }
  
  @Post("/clear")
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, description: 'Costumer not found' })
  clearSelectStatus() {
    return this.clearAllSelectedCostumersUseCase.execute();
  }
  
  @Post(":id")
  @ApiParam({
    name: 'id',
    description: 'ID of costumer that wish select.',
    type: String,
  })
  @ApiQuery({
    name: 'select',
    description: 'Value to selected costumer ou not.',
    required: true,
    type: Boolean,
  })
  @ApiResponse({
    status: 200,
    description: 'Costumer selected successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Parameters invalids.',
  })
  selectCostumer(
    @Param('id') id: string,
    @Query("select") select: string
  ) {
    return this.selectCostumerUseCase.execute(id, select);
  }
  
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Login successfully.',
    type: [FindCostumerDto],
  })
  @ApiResponse({
    status: 401,
    description: 'Credentials invalid.',
  })
  findAll() {
    return this.findAllCostumersUseCase.execute();
  }
  
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Costumer found successfully.',
    type: FindCostumerDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Costumer not found.',
  })
  findOne(@Param('id') id: string) {
    return this.findOneCostumerUseCase.execute(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 204,
  })
  update(@Param('id') id: string, @Body() updateCostumerDto: UpdateCostumerDto) {
    return this.updatedCostumerUseCase.execute(id, updateCostumerDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
  })
  remove(@Param('id') id: string) {
    return this.deleteCostumerUseCase.execute(id);
  }
}
