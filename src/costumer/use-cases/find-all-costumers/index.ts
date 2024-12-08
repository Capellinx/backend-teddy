import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IPaginationOptions, paginate } from "nestjs-typeorm-paginate";
import { Repository } from "typeorm";
import { Costumer } from "../../domain/entities/costumer.entity";


@Injectable()
export class FindAllCostumersUseCase {
  
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async execute(options: IPaginationOptions): Promise<any> {
    const queryBuilder = this.costumerRepository.createQueryBuilder("costumer");
    
    queryBuilder.select([
      'costumer.id',
      'costumer.name',
      'costumer.salary',
      'costumer.company',
      "costumer.is_selected",
    ])
    
    queryBuilder.orderBy('costumer.id', 'DESC')
    
    return paginate<Costumer>(queryBuilder, options)
  }
}