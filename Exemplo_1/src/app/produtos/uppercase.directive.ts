import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[upperCase]'
})
export class UppercaseDirective {
    constructor(
        private el: ElementRef
    ) {}
    @HostListener('keyup') keyup() {
        this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
}
