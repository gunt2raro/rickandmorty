import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutModule } from './libs/master-layout/master-layout.module';
import { MasterLayoutComponent } from './libs/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'episodes',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./libs/characters-grid/characters-grid.module')
        .then(m => m.CharactersGridModule),
    data: { preload: false }
  },
  {
    path: 'locations',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./libs/locations/locations.module')
        .then(m => m.LocationsModule),
    data: { preload: false }
  },
  {
    path: 'episodes',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./libs/episodes/episodes.module')
        .then(m => m.EpisodesModule),
    data: { preload: false }
  },
];

@NgModule({
  imports: [
    MasterLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
