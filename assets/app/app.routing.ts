import { Routes, RouterModule } from '@angular/router';

import { ReleasesComponent } from './releases/releases.component';
import { LabelsComponent } from './labels/labels.component';
import { ReleasesMDComponent } from './releases-model-driven/releases-md.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/releases', pathMatch: 'full' },
    { path: 'releases', component: ReleasesComponent },
    { path: 'releases-md', component: ReleasesMDComponent },
    { path: 'labels', component: LabelsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);