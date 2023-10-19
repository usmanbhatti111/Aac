import { ApiProperty } from '@nestjs/swagger';

export class DeleteLifecycleStageResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'Success' })
  message: string;

  @ApiProperty({})
  data: {};

  @ApiProperty({ example: null })
  errors: [];
}
