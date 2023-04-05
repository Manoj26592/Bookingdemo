import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: 'newbooking', loadChildren: () => import('./newbooking/newbooking.module').then(m => m.NewbookingModule) },
  {path:'',redirectTo:'/home',pathMatch:'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
