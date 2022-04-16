import { KayboardManagerModule } from './../../directives/kayboard-manager/kayboard-manager.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    KayboardManagerModule
  ],
  exports: [YesNoButtonGroupComponent]
})
export class YesNoButtonGroupModule { }
