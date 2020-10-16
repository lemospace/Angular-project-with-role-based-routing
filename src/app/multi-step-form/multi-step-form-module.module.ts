import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepFormComponent } from './multi-step-form.component';
import { FormatTitleModule } from '../format-title/format-title.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MultiStepFormComponent],
  imports: [CommonModule, FormatTitleModule, ReactiveFormsModule, FormsModule],
  exports: [MultiStepFormComponent],
})
export class MultiStepFormModuleModule {}
