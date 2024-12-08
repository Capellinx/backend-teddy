import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Costumer } from "../../domain/entities/costumer.entity";


@Injectable()
export class FindOneCostumerUseCase {
  
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async execute(id: string): Promise<Costumer> {
    const isAlreadyExistCostumer = await this.costumerRepository.findOne({
      where: {
        id
      }
    })
    
    if(!isAlreadyExistCostumer) {
      throw new NotFoundException("Costumer not found");
    }
    
    return await this.costumerRepository.findOneOrFail({
      where: {
        id
      }
    })
  }
}