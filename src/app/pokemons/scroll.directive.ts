import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[pokemonsScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostListener('scroll', ['$event.target'])
  onScroll(el: Element): void {
    console.log(el.scrollTop, el.scrollHeight);
  }

}
