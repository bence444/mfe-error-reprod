import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'social',
    loadChildren: () => loadRemoteModule('social', './module')
      .then(m => m.AppModule)
  }
];
