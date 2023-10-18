import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModels } from '../src/model.provider';
import {
  AdminRoleRepository,
  AssetsSoftwareRepository,
  ContactRepository,
  ExpenseRepository,
  FaqRepository,
  FeatureRepository,
  InventoryRepository,
  InvoiceRepository,
  JobRepository,
  ModuleRepository,
  NewsAndEventRepository,
  OrganizationPlanRepository,
  OrganizationRepository,
  PaymentRepository,
  PermissionRepository,
  PlanProductFeatureRepository,
  PlanProductModulePermissionRepository,
  PlanRepository,
  PlanTypeRepository,
  ProductCategoriesRepository,
  ProductFeaturesRepository,
  ProductsRepository,
  PurchaseRepository,
  QuickLinksRepository,
  RequestLogRepository,
  ContractRepository,
  TaskManagementRepository,
  TaskRepository,
  TicketRepository,
  UserAccountsRepository,
  UserORepository,
  UserRepository,
  OrganizationCompanyAccountRepository,
} from '../src/repositories/index';
import { MongooseConfig } from './config/mongo.config';
import { SharedService } from './shared.service';

import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { S3Service } from './services';

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
    PurchaseRepository,
    TaskRepository,
    ProductsRepository,
    UserRepository,
    PlanRepository,
    PlanProductFeatureRepository,
    PlanProductModulePermissionRepository,
    NewsAndEventRepository,
    InvoiceRepository,
    OrganizationPlanRepository,
    JobRepository,
    FaqRepository,
    PaymentRepository,
    UserAccountsRepository,
    NewsAndEventRepository,
    InvoiceRepository,
    OrganizationPlanRepository,
    ProductFeaturesRepository,
    OrganizationRepository,
    ExpenseRepository,
    QuickLinksRepository,
    UserRepository,
    AdminRoleRepository,
    AssetsSoftwareRepository,
    FeatureRepository,
    ModuleRepository,
    PermissionRepository,
    TaskManagementRepository,
    UserORepository,
    ContactRepository,
    PlanTypeRepository,
    ModuleRepository,
    PermissionRepository,
    ProductCategoriesRepository,
    RequestLogRepository,
    ContractRepository,
    OrganizationCompanyAccountRepository,
    {
      provide: 'S3',
      useFactory: (config: ConfigService) =>
        new S3({
          region: config.get('S3_REGION'),
          credentials: {
            accessKeyId: config.get('S3_AWS_ACCESS_KEY'),
            secretAccessKey: config.get('S3_AWS_SECRET_KEY'),
          },
        }),
      inject: [ConfigService],
    },
    S3Service,
  ],
  exports: [
    SharedService,
    MongooseModule.forFeature(DbModels),
    TicketRepository,
    InventoryRepository,
    PurchaseRepository,
    TaskRepository,
    ProductsRepository,
    UserRepository,
    PlanRepository,
    PlanProductFeatureRepository,
    PlanProductModulePermissionRepository,
    NewsAndEventRepository,
    InvoiceRepository,
    OrganizationPlanRepository,
    JobRepository,
    FaqRepository,
    PaymentRepository,
    UserAccountsRepository,
    NewsAndEventRepository,
    InvoiceRepository,
    OrganizationPlanRepository,
    ProductFeaturesRepository,
    OrganizationRepository,
    OrganizationCompanyAccountRepository,
    ExpenseRepository,
    QuickLinksRepository,
    UserRepository,
    AdminRoleRepository,
    AssetsSoftwareRepository,
    FeatureRepository,
    ModuleRepository,
    PermissionRepository,
    TaskManagementRepository,
    UserORepository,
    ContactRepository,
    PlanTypeRepository,
    ModuleRepository,
    PermissionRepository,
    ProductCategoriesRepository,
    RequestLogRepository,
    ContractRepository,
    S3Service,
  ],
})
export class SharedModule {}
