import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddNewProductComponent } from './add-new-product.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewProductComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewProductRouterModule {}
