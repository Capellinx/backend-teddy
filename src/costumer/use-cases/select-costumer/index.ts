import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Costumer } from "../../domain/entities/costumer.entity";


@Injectable()
export class SelectCostumerUseCase {
  
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async execute(id: string, select: string): Promise<void> {
    const isAlreadyExistCostumer = await this.costumerRepository.findOne({
      where: {
        id
      }
    })
    
    if (!isAlreadyExistCostumer) {
      throw new NotFoundException("Costumer not found");
    }
    
    if(select == "false") {
      await this.costumerRepository.update(id, {
        is_selected: false,
      })
      
      return;
    }
    
    await this.costumerRepository.update(id, {
      is_selected: true
    })
    return
  }
}