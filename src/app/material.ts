import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatListModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatMenuModule],
  exports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatMenuModule],
})
export class MaterialModule { }