import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { MongooseConfig } from './config/mongo.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DbModels } from '../src/model.provider';
import {
  TicketRepository,
  InventoryRepository,
  PurchaseRepository,
  TaskRepository,
  UserRepository,
  PlanRepository,
  PlanProductFeatureRepository,
  PlanProductModulePermissionRepository,
  NewsAndEventRepository,
  JobRepository,
  FaqRepository,
  PaymentRepository,
  UserAccountsRepository,
  InvoiceRepository,
  OrganizationPlanRepository,
  ProductFeaturesRepository,
  OrganizationRepository,
  OrganizationCompanyAccountRepository,
  ExpenseRepository,
  AdminRoleRepository,
  AssetsSoftwareRepository,
  ProductRepository,
  FeatureRepository,
  ModuleRepository,
  PermissionRepository,
  UserORepository,
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
    PurchaseRepository,
    TaskRepository,
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
    UserRepository,
    AdminRoleRepository,
    AssetsSoftwareRepository,
    ProductRepository,
    FeatureRepository,
    ModuleRepository,
    PermissionRepository,
    UserORepository,
  ],
  exports: [
    SharedService,
    MongooseModule.forFeature(DbModels),
    TicketRepository,
    InventoryRepository,
    PurchaseRepository,
    TaskRepository,
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
    UserRepository,
    AdminRoleRepository,
    AssetsSoftwareRepository,
    ProductRepository,
    FeatureRepository,
    ModuleRepository,
    PermissionRepository,
    UserORepository,
  ],
})
export class SharedModule {}
