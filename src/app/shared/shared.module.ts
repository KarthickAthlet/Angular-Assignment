import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CheckboxComponent } from './partials/checkbox/checkbox.component';


@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [CheckboxComponent]
})
export class SharedModule { }
