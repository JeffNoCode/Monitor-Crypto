import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: number = 0; 
  @Input() previousPrice: number = 0; 

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    
    
    if (this.appHighlight > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else if (this.appHighlight < 0) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
      
  }
}