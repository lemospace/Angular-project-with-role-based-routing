import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditDetailComponent } from './edit-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EditDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDetailRouterModule {}
