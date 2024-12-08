import { PartialType } from '@nestjs/mapped-types';

class _UpdatedCostumerDto {
  name: string;
  salary: number;
  company: number;
}

export class UpdateCostumerDto extends PartialType(_UpdatedCostumerDto) {}
