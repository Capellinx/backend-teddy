import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Costumer } from "../../domain/entities/costumer.entity";

@Injectable()
export class DeleteCostumerUseCase {
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}

  async execute(id: string): Promise<void> {
    const foundCostumer = await this.costumerRepository.findOneOrFail({
      where: {
        id,
      },
    });

    if (!foundCostumer) {
      throw new NotFoundException(`Costumer not found: ${id}`);
    }

    await this.costumerRepository.delete(id);

    return;
  }
}
