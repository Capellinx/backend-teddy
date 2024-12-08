import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  password: string
}
