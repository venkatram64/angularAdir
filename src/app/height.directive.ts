import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeight]'
})
export class HeightDirective {

  @Input('appHeight') height = 100;

  constructor(private er: ElementRef) {
    er.nativeElement.style.height = (this.height === undefined ? 100 : this.height) + 'px';
   }

   @HostListener('click') onclick(){
    this.er.nativeElement.style.height = this.height + 'px';  
   }

}
