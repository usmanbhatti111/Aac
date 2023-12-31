import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common';

export class GetReportWidgetByIdDto {
  @ApiProperty({
    type: String,
    required: true,
    example: '651d72b06c9932a97b031a34',
  })
  @IsMongoId()
  @IsNotEmpty()
  ticketId: string;
}

export class ListReportWidgetDTO extends PaginationDto {
  @ApiProperty({
    example: '',
    required: false,
  })
  @IsOptional()
  search: string;
}
