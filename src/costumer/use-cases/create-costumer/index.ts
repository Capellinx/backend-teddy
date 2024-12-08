import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCostumerDto } from "../../dto/create-costumer.dto";
import { Costumer } from "../../entities/costumer.entity";

@Injectable()
export class CreateCostumerUseCase {
  
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async execute(costumer: CreateCostumerDto) {
    const isAlreadyExistCostumer = await this.costumerRepository.findOne({
      where: {
        name: costumer.name,
        company: costumer.company,
        salary: costumer.salary,
      }
    })
    
    if (isAlreadyExistCostumer) {
      throw new BadRequestException("Costumer already exists");
    }
    
    const newCostumer = new Costumer({
      name: costumer.name,
      salary: costumer.salary,
      company: costumer.company,
    })
    
    await this.costumerRepository.save(newCostumer);
    
    return
  }
}