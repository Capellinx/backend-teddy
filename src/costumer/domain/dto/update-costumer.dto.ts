import { ApiProperty } from '@nestjs/swagger';

export class UpdateCostumerDto {
  @ApiProperty({ required: false })
  name?: string;
  
  @ApiProperty({ required: false })
  salary?: number;
  
  @ApiProperty({ required: false })
  company?: number;
}
