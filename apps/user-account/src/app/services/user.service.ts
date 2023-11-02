import { HttpStatus, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserRepository } from '@shared';
import { ResponseMessage, successResponse, UserRole } from '@shared/constants';
import { AdminUserGetResponseDto, CreateUserDto } from '@shared/dto';
import { Model } from 'mongoose';
import { CompanyHouseService } from './company-house.service';

@Injectable()
export class UserService {
  constructor(
    private userReposity: UserRepository,
    private companyHouseService: CompanyHouseService,
    @InjectModel('User') private readonly exampleModel: Model<User>
  ) {}

  async create(payload: CreateUserDto) {
    try {
      const { crn, role } = payload;

      if (role === UserRole.SUPER_ADMIN) {
        // PENDING: (need to create lambda function or new flow with identitygram) Send temporary password email
        // Change cognitoId to required true when it is done
        return successResponse(
          HttpStatus.OK,
          ResponseMessage.SUCCESS,
          await this.userReposity.create(payload)
        );
      }

      this.companyHouseService.searchCompanyByCode({ crn });

      return successResponse(HttpStatus.OK, ResponseMessage.SUCCESS, {});

      return successResponse(
        HttpStatus.OK,
        ResponseMessage.SUCCESS,
        await this.userReposity.create(payload)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  async listUsers(payload: AdminUserGetResponseDto) {
    try {
      const { page = 1, limit = 10, search } = payload;
      const offset = (page - 1) * limit;
      delete payload.page;
      delete payload.limit;
      delete payload.search;

      let filterQuery = {};
      if (search) {
        filterQuery = {
          $or: [
            {
              firstName: {
                $regex: search,
                $options: 'i',
              },
            },
            {
              lastName: {
                $regex: search,
                $options: 'i',
              },
            },
          ],
        };
      }

      filterQuery = { ...filterQuery, ...payload };

      const pipelines = [];

      pipelines.push({
        $project: {
          _id: 1,
          firstName: 1,
          middleName: 1,
          lastName: 1,
          role: 1,
          status: 1,
          createdAt: 1,
        },
      });
      const res = await this.userReposity.paginate({
        filterQuery,
        pipelines,
        offset,
        limit,
      });

      return successResponse(HttpStatus.OK, ResponseMessage.SUCCESS, res);
    } catch (error) {
      throw new RpcException(error);
    }
  }

  async createForSignup(payload: User) {
    try {
      return successResponse(
        HttpStatus.OK,
        ResponseMessage.SUCCESS,
        await this.userReposity.create(payload)
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  async loggedInUser(payload: { email: string }) {
    try {
      return successResponse(
        HttpStatus.OK,
        ResponseMessage.SUCCESS,
        await this.exampleModel
          .findOne({ ...payload })
          .populate('products organization')
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }

  async findUserByUniqueFields(payload: {
    _id?: string;
    email?: string;
    cognitoId?: string;
  }) {
    try {
      return successResponse(
        HttpStatus.OK,
        ResponseMessage.SUCCESS,
        await this.userReposity.findOne(
          { ...payload },
          '_id firstName middleName lastName role products organization'
        )
      );
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
