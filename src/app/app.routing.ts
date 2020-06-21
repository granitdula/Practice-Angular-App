import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: ":medium", component: MediaItemListComponent },
    { path: "", pathMatch: "full", redirectTo: "all" }
];

export const routing = RouterModule.forRoot(appRoutes);
