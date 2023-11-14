import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { S3 } from '@aws-sdk/client-s3';
import { DbModels } from '../src/model.provider';
import {
  AdminRoleRepository,
  AssetsSoftwareRepository,
  ContactRepository,
  ContactStateRepository,
  ContractRepository,
  ExpenseRepository,
  FaqRepository,
  FeatureRepository,
  FileRepository,
  FolderRepository,
  InventoryRepository,
  InvoiceRepository,
  JobRepository,
  LifecycleStagesRepository,
  ModuleRepository,
  NewsAndEventRepository,
  OrganizationCompanyAccountRepository,
  OrganizationPlanRepository,
  OrganizationRepository,
  PaymentRepository,
  PermissionRepository,
  PlanProductFeatureRepository,
  PurchaseApprovalRepository,
  PlanProductModulePermissionRepository,
  PlanRepository,
  PlanTypeRepository,
  ProductCategoriesRepository,
  ProductFeaturesRepository,
  ProductsRepository,
  PurchaseRepository,
  QuickLinksRepository,
  RequestLogRepository,
  TaskActivityRepository,
  TaskManagementRepository,
  TaskRepository,
  TicketRepository,
  UserAccountsRepository,
  UserORepository,
  DealPipelineRepository,
  SalesProductRepository,
  ContactNoteRepository,
  UserRepository,
  AttachmentRepository,
  ContactCallRepository,
  SoftwareUsersRepository,
  ActivityLogRepository,
  DashboardRepository,
  ReportsWidgetRepository,
  ArticlesRepository,
  ContactMeetingRepository,
  DealsRepository,
  NoteRepository,
  EnquiriesRepository,
  TaxCalculationRepository,
  DealViewsRepository,
  ActivitylogsRepository,
  JobApplicationsRepository,
} from '../src/repositories/index';
import { MongooseConfig } from './config/mongo.config';
import { SharedService } from './shared.service';
import { DownloadService, EmailService, S3Service } from './services';

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
    UserORepository,
    TaskManagementRepository,
    PurchaseApprovalRepository,
    UserORepository,
    ContactRepository,
    PlanTypeRepository,
    RequestLogRepository,
    TaskActivityRepository,
    ContactNoteRepository,
    UserORepository,
    FolderRepository,
    FileRepository,
    ProductCategoriesRepository,
    RequestLogRepository,
    OrganizationCompanyAccountRepository,
    ContactStateRepository,
    ContractRepository,
    DealPipelineRepository,
    SalesProductRepository,
    AttachmentRepository,
    ContactCallRepository,
    LifecycleStagesRepository,
    SoftwareUsersRepository,
    DashboardRepository,
    ReportsWidgetRepository,
    ContactMeetingRepository,
    DealsRepository,
    NoteRepository,
    EnquiriesRepository,
    TaxCalculationRepository,
    DealViewsRepository,
    ActivitylogsRepository,
    JobApplicationsRepository,
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
    DownloadService,
    ActivityLogRepository,
    ArticlesRepository,
    EmailService,
  ],
  exports: [
    SharedService,
    MongooseModule.forFeature(DbModels),
    TicketRepository,
    InventoryRepository,
    PurchaseRepository,
    TaskRepository,
    ProductsRepository,
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
    UserORepository,
    TaskManagementRepository,
    DashboardRepository,
    UserORepository,
    ContactRepository,
    PlanTypeRepository,
    RequestLogRepository,
    TaskActivityRepository,
    ContactNoteRepository,
    UserORepository,
    FolderRepository,
    FileRepository,
    ProductCategoriesRepository,
    RequestLogRepository,
    ContractRepository,
    S3Service,
    ContractRepository,
    AttachmentRepository,
    DownloadService,
    ContactStateRepository,
    ContactCallRepository,
    LifecycleStagesRepository,
    ReportsWidgetRepository,
    SoftwareUsersRepository,
    ActivityLogRepository,
    ArticlesRepository,
    ContactMeetingRepository,
    DealPipelineRepository,
    SalesProductRepository,
    DealsRepository,
    NoteRepository,
    ActivitylogsRepository,
    PurchaseApprovalRepository,
    EmailService,
    EnquiriesRepository,
    TaxCalculationRepository,
    DealViewsRepository,
    JobApplicationsRepository,
  ],
})
export class SharedModule {}
