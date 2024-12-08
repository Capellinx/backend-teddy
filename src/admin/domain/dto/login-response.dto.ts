import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ description: 'Token de autenticação gerado.' })
  token: string;
  
  @ApiProperty({ description: 'Tempo de expiração do token (em segundos).' })
  expiresIn: number;
  
  @ApiProperty({ description: 'Nome do administrador.' })
  name: string;
}
