import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatButtonToggleModule } from '@angular/material';

const materialComponents = [
  MatButtonModule, MatToolbarModule, MatButtonToggleModule
]

@NgModule({
  declarations: [],
  imports: [ materialComponents ],
  exports: [ materialComponents ]
})
export class AppMaterialModule { }
