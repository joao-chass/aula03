import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DisableControlDirectives } from './disable-control.directive';

@NgModule({
  declarations: [DisableControlDirectives],
  imports: [CommonModule],
  exports: [DisableControlDirectives]
})
export class DisableControlModule {}
