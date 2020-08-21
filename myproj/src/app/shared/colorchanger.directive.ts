import { Renderer2, ElementRef, Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[cc]'
})

export class ColorChanger{
   /* constructor (ren: Renderer2, ef:ElementRef){
        ren.setStyle(ef.nativeElement,'backgroundColor', 'blue');
    }
}*/
private defaultcolor = 'white';

@HostListener('mouseenter')
addcolor(){
    this.defaultcolor = 'blue';
}

@HostListener('mouseleave')
removecolor(){
    this.defaultcolor = 'white';
}

@HostBinding('style.backgroundColor')
get applystyle(){
    return this.defaultcolor;
    }
}
