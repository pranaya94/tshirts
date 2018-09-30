import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule],
  exports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule],
})
export class MaterialModule { }