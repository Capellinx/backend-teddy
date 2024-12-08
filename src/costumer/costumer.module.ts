import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CostumerController } from './costumer.controller';
import { Costumer } from "./domain/entities/costumer.entity";
import { ClearAllSelectedCostumersUseCase } from "./use-cases/clear-all-selected-costumers";
import { CreateCostumerUseCase } from "./use-cases/create-costumer";
import { DeleteCostumerUseCase } from "./use-cases/delete-costumer";
import { FindAllCostumersUseCase } from "./use-cases/find-all-costumers";
import { FindOneCostumerUseCase } from "./use-cases/find-one-costumer";
import { SelectCostumerUseCase } from "./use-cases/select-costumer";
import { UpdatedCostumerUseCase } from "./use-cases/update-costumer";

@Module({
  imports: [
    TypeOrmModule.forFeature([Costumer])
  ],
  controllers: [CostumerController],
  providers: [
    CreateCostumerUseCase,
    FindOneCostumerUseCase,
    FindAllCostumersUseCase,
    DeleteCostumerUseCase,
    UpdatedCostumerUseCase,
    SelectCostumerUseCase,
    ClearAllSelectedCostumersUseCase
  ],
})
export class CostumerModule {}
