import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdateCostumerDto } from "../../domain/dto/update-costumer.dto";
import { Costumer } from "../../domain/entities/costumer.entity";


@Injectable()
export class UpdatedCostumerUseCase {
  
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async execute(id: string, costumer: UpdateCostumerDto): Promise<Costumer[]> {
    const costumerFound = await this.costumerRepository.findOneOrFail({
      where: {
        id
      }
    })
    
    if (!costumerFound) {
      throw new NotFoundException(`Costumer not found: ${id}`);
    }
    
    const newCostumerInformation = new Costumer({
      name: costumer.name,
      salary: costumer.salary,
      company: costumer.company,
    })
    
    await this.costumerRepository.update(id, newCostumerInformation);
    
    return  }
}