import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatListModule, MatMenuModule, MatDialogModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatMenuModule, MatDialogModule, MatInputModule],
  exports: [MatCardModule, MatButtonModule, MatSelectModule, BrowserAnimationsModule, MatListModule, MatMenuModule, MatDialogModule, MatInputModule]
})
export class MaterialModule { }