import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewbookingComponent } from './newbooking.component';

const routes: Routes = [{ path: '', component: NewbookingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewbookingRoutingModule { }
