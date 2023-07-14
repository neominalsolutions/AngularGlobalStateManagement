import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFont]',
})
export class FontDirective {
  // directive component içerisinde bir elementin stil özellikleri kazandırmak için kullandığımız yapıdır.

  constructor(private ref: ElementRef) {
    const el = this.ref.nativeElement as HTMLElement;
    el.style.fontSize = '12px';
  }

  @HostListener('mouseover')
  MouseOver() {
    const el = this.ref.nativeElement as HTMLElement;
    el.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave')
  MouseOut() {
    const el = this.ref.nativeElement as HTMLElement;
    el.style.textDecoration = 'none';
  }
}
