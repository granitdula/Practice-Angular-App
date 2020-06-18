import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-media-items',
    templateUrl: './media-items.component.html',
    styleUrls: ['./media-items.component.css']
})
export class MediaItemsComponent {
    @Input() mediaItem;
    @Output() delete = new EventEmitter();

    onDelete(): void {
        console.log("deleted.");
        this.delete.emit(this.mediaItem);
    }
}
