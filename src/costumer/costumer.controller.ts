import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCostumerDto } from './domain/dto/create-costumer.dto';
import { UpdateCostumerDto } from './domain/dto/update-costumer.dto';
import { CreateCostumerUseCase } from "./use-cases/create-costumer";
import { DeleteCostumerUseCase } from "./use-cases/delete-costumer";
import { FindAllCostumersUseCase } from "./use-cases/find-all-costumers";
import { FindOneCostumerUseCase } from "./use-cases/find-one-costumer";
import { UpdatedCostumerUseCase } from "./use-cases/update-costumer";

@Controller('costumer')
export class CostumerController {
  constructor(
    private readonly createCostumerUseCase: CreateCostumerUseCase,
    private readonly findOneCostumerUseCase: FindOneCostumerUseCase,
    private readonly findAllCostumersUseCase: FindAllCostumersUseCase,
    private readonly deleteCostumerUseCase: DeleteCostumerUseCase,
    private readonly updatedCostumerUseCase: UpdatedCostumerUseCase,
  ) {}

  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto) {
    return this.createCostumerUseCase.execute(createCostumerDto);
  }

  @Get()
  findAll() {
    return this.findAllCostumersUseCase.execute();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneCostumerUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostumerDto: UpdateCostumerDto) {
    return this.updatedCostumerUseCase.execute(id, updateCostumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteCostumerUseCase.execute(id);
  }
}
