import { CreateCostumerDto } from "../dto/create-costumer.dto";
import { UpdateCostumerDto } from "../dto/update-costumer.dto";
import { Costumer } from "../entities/costumer.entity";

export interface ICostumerRepository {
  create(costumerDto: CreateCostumerDto): Promise<void>;
  findOne(costumer: CreateCostumerDto): Promise<Costumer>;
  findAll(): Promise<Costumer[]>;
  update(id: string, costumerDto: UpdateCostumerDto): Promise<void>;
  delete(id: string): Promise<void>;
}