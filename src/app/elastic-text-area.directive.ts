import { HostListener, Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive ({
	selector: '[elastic]'
})

export class chiziElastic {
	@HostListener ('input', ['$event.target'])
	onInput (nativeElement: any): void {
		nativeElement.style.overflow = 'hidden';
		nativeElement.style.height = 'auto';
		nativeElement.style.height = nativeElement.scrollHeight + "px";
	}
}

@Directive ({
	selector: '[clickOutside]'
})

export class ClickOutsideDirective{
	constructor (private elRef: ElementRef){}

	@Output()
	public clickOutside = new EventEmitter();

	@HostListener ('document:click', ['$event.target'])
	public onClick(targetElement) {
		const clickedInside = this.elRef.nativeElement.contains(targetElement);
		if (!clickedInside) {
			this.clickOutside.emit(null);
		}
	}

}