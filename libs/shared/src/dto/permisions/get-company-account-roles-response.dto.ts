import { ApiProperty } from '@nestjs/swagger';

export class GetCompanyAccountRolesResponseDto {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: 'Success' })
  message: string;

  @ApiProperty({
    example: {
      id: '654b1f6916ba44785de24cc3',
      organizationId: '56cb91bdc3464f14678934ca',
      organizationCompanyAccountId: '56cb91bdc3464f14678934ca',
      productId: '56cb91bdc3464f14678934ca',
      name: 'name of role',
      description: 'description of role',
      permissions: ['add-list', 'view-user'],
      createdAt: '2023-11-08T05:40:57.041Z',
      updatedAt: '2023-11-08T05:40:57.041Z',
    },
  })
  data: {};

  @ApiProperty({ example: null })
  errors: [];
}
