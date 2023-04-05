import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewbookingRoutingModule } from './newbooking-routing.module';
import { NewbookingComponent } from './newbooking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { SearchhotelComponent } from './searchhotel/searchhotel.component';
import { ChoosehotelComponent } from './choosehotel/choosehotel.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { GuestinfoComponent } from './guestinfo/guestinfo.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { FinishbookingComponent } from './finishbooking/finishbooking.component';


@NgModule({
  declarations: [
    NewbookingComponent,
    SearchhotelComponent,
    ChoosehotelComponent,
    PersonalinfoComponent,
    GuestinfoComponent,
    PaymentdetailsComponent,
    FinishbookingComponent
  ],
  imports: [
    CommonModule,
    NewbookingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModuleModule,
  ]
})
export class NewbookingModule { }
