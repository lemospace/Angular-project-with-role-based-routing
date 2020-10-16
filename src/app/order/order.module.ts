import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MultiStepFormModuleModule } from '../multi-step-form/multi-step-form-module.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule, MultiStepFormModuleModule],
  exports: [OrderComponent],
})
export class OrderModule {}
