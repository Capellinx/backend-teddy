import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Costumer } from "../../entities/costumer.entity";


@Injectable()
export class FindAllCostumersUseCase {
  
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async execute(): Promise<Costumer[]> {
    return await this.costumerRepository.find();
  }
}