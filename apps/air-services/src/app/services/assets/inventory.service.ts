import { HttpStatus, Injectable } from '@nestjs/common';
import { errorResponse, successResponse } from '@shared/constants';
import { InventoryRepository } from '@shared';
import { GetInventoryDto } from '@shared/dto';
import { Types } from 'mongoose';

@Injectable()
export class InventoryService {
  constructor(private inventoryRepository: InventoryRepository) {}

  async addInventory(payload: any) {
    try {
      const res = await this.inventoryRepository.create({ ...payload });
      return successResponse(HttpStatus.CREATED, 'Success', res);
    } catch (error) {
      return errorResponse(HttpStatus.BAD_REQUEST, 'Bad Request', error?.name);
    }
  }
  async getInventory(payload?: GetInventoryDto) {
    try {
      const {
        impact,
        locationId,
        displayName,
        limit,
        page,
        usedBy,
        departmentId,
        assetType,
      } = payload;
      const filterQuery = {};
      const offset = limit * (page - 1);
      if (impact) {
        filterQuery['impact'] = impact;
      }
      if (displayName) {
        filterQuery['displayName'] = displayName;
      }
      if (departmentId) {
        filterQuery['departmentId'] = new Types.ObjectId(departmentId);
      }

      if (usedBy) {
        filterQuery['usedBy'] = new Types.ObjectId(usedBy);
      }
      if (assetType) {
        filterQuery['assetType'] = assetType;
      }
      if (locationId) {
        filterQuery['locationId'] = new Types.ObjectId(locationId);
      }
      const res = await this.inventoryRepository.paginate({
        filterQuery,
        offset,
        limit,
      });
      return successResponse(HttpStatus.CREATED, 'Success', res);
    } catch (error) {
      return errorResponse(HttpStatus.BAD_REQUEST, 'Bad Request', error?.name);
    }
  }
  async deleteInventory(payload: { ids: string[] }) {
    try {
      const res = await this.inventoryRepository.deleteMany({}, payload.ids);

      return successResponse(HttpStatus.OK, 'Success', res);
    } catch (error) {
      return errorResponse(HttpStatus.BAD_REQUEST, 'Bad Request', error?.name);
    }
  }
}