import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatListModule, MatMenuModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatMenuModule, MatDialogModule],
  exports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatMenuModule, MatDialogModule]
})
export class MaterialModule { }