import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDetailComponent } from './edit-detail.component';
import { EditDetailRouterModule } from './edit-detail-router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EditDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditDetailRouterModule,
    FileUploadModule,
    HttpClientModule,
  ],
  exports: [EditDetailComponent],
})
export class EditDetailModule {}
