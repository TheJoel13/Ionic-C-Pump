import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'pecho',
    loadChildren: () => import('./pages/pecho/pecho.module').then(m => m.PechoPageModule)
  },
  {
    path: 'hombro',
    loadChildren: () => import('./pages/hombro/hombro.module').then(m => m.HombroPageModule)
  },
  {
    path: 'espalda',
    loadChildren: () => import('./pages/espalda/espalda.module').then(m => m.EspaldaPageModule)
  },
  {
    path: 'abdomen',
    loadChildren: () => import('./pages/abdomen/abdomen.module').then(m => m.AbdomenPageModule)
  },
  {
    path: 'pierna',
    loadChildren: () => import('./pages/pierna/pierna.module').then(m => m.PiernaPageModule)
  },
  {
    path: 'brazo',
    loadChildren: () => import('./pages/brazo/brazo.module').then(m => m.BrazoPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
