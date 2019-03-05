import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') color;

  constructor(private er: ElementRef) {
    er.nativeElement.style.backgroundColor = this.color === undefined || this.color === '' ? 
                                                      'red': this.color;
   }

   @HostListener('click') onclick(){
    this.er.nativeElement.style.backgroundColor = this.color === undefined || this.color === '' ? 
                                                      'red': this.color;  
   }

}
