import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private ref:ElementRef) { }
@HostListener('focus') onfocus(){

}
@HostListener('blur') onBlur(){
 let valueOfInput:string = this.ref.nativeElement.value
 this.ref.nativeElement.value = valueOfInput.toUpperCase()  //uppercaseMyElement
}
}
