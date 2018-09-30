import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms'
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TshirtListComponent } from './components/tshirt-list/tshirt-list.component';
import { TshirtDetailsComponent } from './components/tshirt-details/tshirt-details.component';
import { AppRoutingModule } from './app-routing.module';

import { tshirtService } from './services/tshirt.service';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TshirtListComponent,
    TshirtDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [tshirtService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
