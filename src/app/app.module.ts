import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { MaterialModule } from './material';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TshirtListComponent } from './components/tshirt-list/tshirt-list.component';
import { TshirtDetailsComponent } from './components/tshirt-details/tshirt-details.component';
import { AppRoutingModule } from './app-routing.module';

import { tshirtService } from './services/tshirt.service';

@NgModule({
  declarations: [
    AppComponent,
    TshirtListComponent,
    TshirtDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [tshirtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
