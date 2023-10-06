import { Module } from '@nestjs/common';

import { JobsController } from './controllers/jobs.controller';
import { SharedModule } from '@shared';
import { SuperAdminController } from './controllers/super-admin.controller';
import { SuperAdminService } from './services/super-admin.service';
import { ExampleController } from './controllers/example.controller';
import { ExampleService } from './services/examples.service';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { JobsService } from './services/jobs.service';
import { InvoiceController } from './controllers/invoice.controller';
import { InvoiceService } from './services/invoice.service';

@Module({
  imports: [SharedModule],
  controllers: [
    ExampleController,
    ProductsController,
    JobsController,
    InvoiceController,
    SuperAdminController,
  ],
  providers: [
    ExampleService,
    ProductsService,
    JobsService,
    InvoiceService,
    SuperAdminService,
  ],
})
export class SuperAdminModule {}
