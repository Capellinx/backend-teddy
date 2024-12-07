import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';
import { Costumer } from "./entities/costumer.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Costumer])
  ],
  controllers: [CostumerController],
  providers: [CostumerService],
})
export class CostumerModule {}
