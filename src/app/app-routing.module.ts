
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TshirtListComponent } from './components/tshirt-list/tshirt-list.component'
import { TshirtDetailsComponent } from './components/tshirt-details/tshirt-details.component';

const routes: Routes = [
  {path : '', component: TshirtListComponent},
  {path : ':id', component: TshirtDetailsComponent}
];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }