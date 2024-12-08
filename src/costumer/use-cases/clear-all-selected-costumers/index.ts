import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Costumer } from "../../domain/entities/costumer.entity";

@Injectable()
export class ClearAllSelectedCostumersUseCase {
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}

  async execute(): Promise<void> {
    const selectedCostumers = await this.costumerRepository.find({
      where: { is_selected: true },
    });

    if (selectedCostumers.length === 0) {
      throw new NotFoundException("No selected customers found.");
    }

    for (const costumer of selectedCostumers) {
      costumer.is_selected = false;
    }

    await this.costumerRepository.save(selectedCostumers);
    
    return;
  }
}
