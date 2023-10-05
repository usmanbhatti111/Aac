import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { PlanProductFeature } from './plan-product-feature.schema';
import { PlanProductModule } from './plan-product-module.schema';
import { PlanProductModulePermission } from './plan-product-module-permission.schema';

export type PlanProductDocument = HydratedDocument<PlanProduct>;

@Schema()
export class PlanProduct extends Document {
  @Prop({
    type: [{ required: true, type: mongoose.Types.ObjectId, ref: 'Plan' }],
  })
  plan: string; // Reference to Plan _id

  @Prop({
    type: [{ required: true, type: mongoose.Types.ObjectId, ref: 'Product' }],
  })
  product: string; // Reference to Product _id

  plan_product_feature: PlanProductFeature[];
  plan_product_module: PlanProductModule[];
  plan_product_module_permission: PlanProductModulePermission[];
  // Add other fields as needed
}

export const PlanProductSchema = SchemaFactory.createForClass(PlanProduct);