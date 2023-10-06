import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { MongooseConfig } from './config/mongo.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DbModels } from '../src/model.provider';
import {
  TicketRepository,
  InventoryRepository,
  TaskRepository,
  PlanRepository,
  PlanProductFeatureRepository,
  PlanProductModuleRepository,
  PlanProductModulePermissionRepository,
  PlanProductRepository,
  PaymentRepository,
} from '../src/repositories/index';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useClass: MongooseConfig,
    }),
    MongooseModule.forFeature(DbModels),
  ],
  providers: [
    SharedService,
    TicketRepository,
    InventoryRepository,
    TaskRepository,
    PlanRepository,
    PlanProductFeatureRepository,
    PlanProductModuleRepository,
    PlanProductModulePermissionRepository,
    PlanProductRepository,
    PaymentRepository,
  ],
  exports: [
    SharedService,
    MongooseModule.forFeature(DbModels),
    TicketRepository,
    InventoryRepository,
    TaskRepository,
    PlanRepository,
    PlanProductFeatureRepository,
    PlanProductModuleRepository,
    PlanProductModulePermissionRepository,
    PlanProductRepository,
    PaymentRepository,
  ],
})
export class SharedModule {}
