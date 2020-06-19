import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[appFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favorite') isFavourite = true;
}
