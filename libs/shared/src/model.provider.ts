import {
  Example,
  ExampleSchema,
  Expense,
  ExpenseSchema,
  Faq,
  FaqSchema,
  Inventory,
  InventorySchema,
  Invoice,
  InvoiceSchema,
  Job,
  JobSchema,
  NewsAndEvent,
  NewsAndEventSchema,
  Organization,
  OrganizationPlan,
  OrganizationPlanSchema,
  OrganizationCompanyAccount,
  OrganizationSchema,
  AdminRole,
  AdminRoleSchema,
  AssetsSoftware,
  AssetsSoftwareSchema,
  Feature,
  FeatureSchema,
  Module,
  ModuleSchema,
  FolderSchema,
  Folder,
  File,
  FileSchema,
  Payment,
  PaymentSchema,
  Permission,
  PermissionSchema,
  Plan,
  PlanProductFeature,
  PlanProductFeatureSchema,
  PlanProductModulePermission,
  PlanSchema,
  PlanType,
  PlanTypeSchema,
  ProductCategories,
  ProductCategoriesSchema,
  ProductFeatures,
  ProductFeaturesSchema,
  ProductModulePermissionSchema,
  Products,
  ProductsSchema,
  Purchase,
  PurchaseSchema,
  QuickLinks,
  QuickLinksSchema,
  RequestLog,
  RequestLogSchema,
  SuperAdmin,
  SuperAdminSchema,
  Task,
  TaskManagement,
  TaskManagementSchema,
  TaskSchema,
  Ticket,
  TicketSchema,
  User,
  UserAccounts,
  UserAccountsSchema,
  UserO,
  UserOSchema,
  UserSchema,
  OrganizationCompanyAccountSchema,
  Contract,
  ContractSchema,
} from './schema';
import { Contact, ContactSchema } from './schema/common-feature';

export const DbModels = [
  {
    name: Example.name,
    schema: ExampleSchema,
  },
  {
    name: Inventory.name,
    schema: InventorySchema,
  },
  {
    name: Purchase.name,
    schema: PurchaseSchema,
  },
  {
    name: ProductFeatures.name,
    schema: ProductFeaturesSchema,
  },
  {
    name: Ticket.name,
    schema: TicketSchema,
  },
  {
    name: Products.name,
    schema: ProductsSchema,
  },
  {
    name: Plan.name,
    schema: PlanSchema,
  },
  {
    name: PlanProductFeature.name,
    schema: PlanProductFeatureSchema,
  },
  {
    name: PlanProductModulePermission.name,
    schema: ProductModulePermissionSchema,
  },
  {
    name: PlanType.name,
    schema: PlanTypeSchema,
  },
  {
    name: Expense.name,
    schema: ExpenseSchema,
  },
  {
    name: OrganizationPlan.name,
    schema: OrganizationPlanSchema,
  },
  {
    name: Task.name,
    schema: TaskSchema,
  },

  {
    name: Job.name,
    schema: JobSchema,
  },
  {
    name: Faq.name,
    schema: FaqSchema,
  },
  {
    name: Products.name,
    schema: ProductsSchema,
    collection: 'products',
  },
  {
    name: SuperAdmin.name,
    schema: SuperAdminSchema,
  },
  {
    name: User.name,
    schema: UserSchema,
  },
  {
    name: UserO.name,
    schema: UserOSchema,
  },
  {
    name: NewsAndEvent.name,
    schema: NewsAndEventSchema,
  },
  {
    name: Invoice.name,
    schema: InvoiceSchema,
  },
  {
    name: Payment.name,
    schema: PaymentSchema,
  },
  {
    name: UserAccounts.name,
    schema: UserAccountsSchema,
  },
  {
    name: Organization.name,
    schema: OrganizationSchema,
  },
  {
    name: OrganizationCompanyAccount.name,
    schema: OrganizationCompanyAccountSchema,
  },
  {
    name: QuickLinks.name,
    schema: QuickLinksSchema,
  },
  {
    name: Folder.name,
    schema: FolderSchema,
  },
  {
    name: File.name,
    schema: FileSchema,
  },
  {
    name: AssetsSoftware.name,
    schema: AssetsSoftwareSchema,
  },
  {
    name: User.name,
    schema: UserSchema,
  },
  {
    name: AdminRole.name,
    schema: AdminRoleSchema,
  },
  {
    name: AssetsSoftware.name,
    schema: AssetsSoftwareSchema,
  },
  {
    name: Feature.name,
    schema: FeatureSchema,
  },
  {
    name: Permission.name,
    schema: PermissionSchema,
  },
  {
    name: TaskManagement.name,
    schema: TaskManagementSchema,
  },
  {
    name: RequestLog.name,
    schema: RequestLogSchema,
  },
  {
    name: Contact.name,
    schema: ContactSchema,
  },
  {
    name: Module.name,
    schema: ModuleSchema,
  },
  {
    name: ProductCategories.name,
    schema: ProductCategoriesSchema,
  },
  {
    name: Contract.name,
    schema: ContractSchema,
  },
];
