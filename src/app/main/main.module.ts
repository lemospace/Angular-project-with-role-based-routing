import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { BikesModule } from '../bikes/bikes.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, BikesModule],
  exports: [MainComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
