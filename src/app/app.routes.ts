import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'full-page',
    loadChildren: () =>
      import('./feature/full-page/full-page.module').then(m => m.FullPageModule)
  },
  {
    path: '',
    redirectTo: 'full-page',
    pathMatch: 'full'
  }
];
