import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IdsDto {
  @ApiProperty({ example: '56cb91bdc3464f14678934ca,56cb91bdc3464f14678934cb' })
  @IsString()
  @IsNotEmpty()
  ids: string;
}
