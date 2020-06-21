import { NewItemModule } from './media-item-form/new-item.module';
import { MockXHRBackend } from './mock-xhr-backend';
import { FavouriteDirective } from './favourite.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { CategoryListPipe } from './category-list.pipe';
import { lookupListToken, lookupLists } from './providers';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemsComponent,
    MediaItemListComponent,
    FavouriteDirective,
    CategoryListPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    NewItemModule
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend,  useClass: MockXHRBackend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
