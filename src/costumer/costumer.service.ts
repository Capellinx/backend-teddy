import { BadRequestException, Injectable  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { randomUUID } from "node:crypto";
import { Repository } from "typeorm";
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Costumer } from "./entities/costumer.entity";

@Injectable()
export class CostumerService {
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}
  
  async create(costumer: CreateCostumerDto) {
    return await this.costumerRepository.save(costumer);
  }

  async findAll() {
    return await this.costumerRepository.find();
  }

  async findOne(id: string) {
    return await this.costumerRepository.findOneOrFail({
      where: {
        id
      }
    })
  }

  update(id: number, updateCostumerDto: UpdateCostumerDto) {
    return `This action updates a #${id} costumer`;
  }

  remove(id: number) {
    return `This action removes a #${id} costumer`;
  }
}
