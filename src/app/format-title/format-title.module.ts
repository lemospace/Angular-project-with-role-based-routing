import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTitlePipe } from '../format-title.pipe';

@NgModule({
  declarations: [FormatTitlePipe],
  imports: [CommonModule],
  exports: [FormatTitlePipe],
})
export class FormatTitleModule {}
