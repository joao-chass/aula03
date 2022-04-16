import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KayboardManagerDirective } from './kayboard-manager.directive';
import { KayboardManagerItemDirective } from './kayboard-manager-item.directive';

@NgModule({
  declarations: [KayboardManagerDirective, KayboardManagerItemDirective],
  imports: [CommonModule],
  exports: [KayboardManagerDirective, KayboardManagerItemDirective],
})
export class KayboardManagerModule {}
