import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemsComponent,
    MediaItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
