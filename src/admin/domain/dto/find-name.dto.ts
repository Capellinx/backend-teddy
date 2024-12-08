import { ApiProperty } from '@nestjs/swagger';

export class FindNameDto {
  @ApiProperty({ description: 'Identificador do admin.' })
  id: string;

  @ApiProperty({ description: 'Nome do administrador.' })
  name: string;
  
  @ApiProperty({ description: 'Hash da senha do admin.' })
  password: string;
}
