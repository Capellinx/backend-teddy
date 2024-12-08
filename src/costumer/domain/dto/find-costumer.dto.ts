import { ApiProperty } from "@nestjs/swagger";

export class FindCostumerDto {
  @ApiProperty()
  id: string;
  
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  salary: number;
  
  @ApiProperty()
  company: number;
  
  @ApiProperty()
  is_selected: boolean;
  
  @ApiProperty()
  created_at: Date;
}
