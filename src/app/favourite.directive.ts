import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favorite') isFavourite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
    @HostListener('mouseenter') onmouseenter() {
        this.hovering = true;
    }
    @HostListener('mouseleave') onmouseleave() {
        this.hovering = false;
    }
    @Input() set appFavourite(value) {
        this.isFavourite = value;
    }
}
