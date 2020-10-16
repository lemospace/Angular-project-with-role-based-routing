import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { BikeDetailComponent } from './bike-detail/bike-detail.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { RoleGuardGuard } from './role-guard.guard';

const routes: Routes = [

  { path: 'detail/:id', component: BikeDetailComponent },
  { path: 'complete', component: OrderCompleteComponent },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'bikes',
    loadChildren: () =>
      import('./bikes/bikes.module').then((m) => m.BikesModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },

  {
    path: 'addNewProduct',
    loadChildren: () =>
      import('./add-new-product/add-new-product.module').then(
        (m) => m.AddNewProductModule
      ),
    canActivate: [RoleGuardGuard],
    data: {
      role: 'ROLE_OWNER',
    }
  },
  {
    path: 'editDetail/:id',
    loadChildren: () =>
      import('./edit-detail/edit-detail.module').then(
        (m) => m.EditDetailModule
      ),
    canActivate: [RoleGuardGuard],
    data: {
      role: [
        'ROLE_ADMIN',
        'ROLE_OWNER',
      ]
    }
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

