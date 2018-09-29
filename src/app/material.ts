import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule],
  exports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule],
})
export class MaterialModule { }