import { ApiProperty } from "@nestjs/swagger";

export class CreateCostumerDto {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  salary: number;
  
  @ApiProperty()
  company: number;
  
}
