import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { Routes, RouterModule, Router } from '@angular/router';

const appRoutes: Routes = [
    { path: "add", component: MediaItemFormComponent },
    { path: ":medium", component: MediaItemListComponent },
    { path: "", pathMatch: "full", redirectTo: "all" }
];

export const routing = RouterModule.forRoot(appRoutes);
