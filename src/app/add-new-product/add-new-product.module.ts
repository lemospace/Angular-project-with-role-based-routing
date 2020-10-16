import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewProductRouterModule } from './add-new-product-router.module';
import { AddNewProductComponent } from './add-new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddNewProductComponent],
  imports: [
    CommonModule,
    AddNewProductRouterModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
  ],
  exports: [AddNewProductComponent],
})
export class AddNewProductModule {}
