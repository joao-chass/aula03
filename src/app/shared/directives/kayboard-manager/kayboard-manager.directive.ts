import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KayboardManagerItemDirective } from './kayboard-manager-item.directive';

@Directive({
  selector: '[appKm]',
})
export class KayboardManagerDirective {
  @ContentChildren(KayboardManagerItemDirective)
  public items: QueryList<KayboardManagerItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveFocus(ArrowDirection.RIGTH).focus();
        break;
      case 'ArrowDown':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        this.moveFocus(ArrowDirection.RIGTH).focus();

        break;
    }
  }

  public moveFocus(direction: ArrowDirection): KayboardManagerItemDirective {
    const items = this.items.toArray();
    const curentSelectIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[curentSelectIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGTH = 1,
}
