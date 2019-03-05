import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appWidth]'
})
export class WidthDirective {

  @Input('appWidth') width;

  constructor(private er: ElementRef) {
    er.nativeElement.style.width = (this.width === undefined ? 100 : this.width) + 'px';
   }

   @HostListener('click') onclick(){
    this.er.nativeElement.style.width =  this.width + 'px';  
   }

}
