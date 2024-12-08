import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCostumerDto } from "../domain/dto/create-costumer.dto";
import { Costumer } from "../domain/entities/costumer.entity";
import { ICostumerRepository } from "../domain/repositories/costumer-repository";

@Injectable()
export class CostumerTypeOrmRepository implements ICostumerRepository {
  constructor(
    private readonly typeOrmRepo: Repository<Costumer>,
  ) {}

  async create(costumerDto: CreateCostumerDto): Promise<void> {
    await this.typeOrmRepo.save(costumerDto);
  }

  async findAll(): Promise<Costumer[]> {
    return await this.typeOrmRepo.find();
  }

  async findOne(costumer: CreateCostumerDto): Promise<Costumer> {
    return await this.typeOrmRepo.findOneOrFail({
      where: {
        name: costumer.name,
        salary: costumer.salary,
      },
    });
  }

  async update(id: string, costumerUpdate: Costumer): Promise<void> {
    await this.typeOrmRepo.update(id, costumerUpdate);
  }

  async delete(id: string): Promise<void> {
    await this.typeOrmRepo.delete(id);
  }
}
