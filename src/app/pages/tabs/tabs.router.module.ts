import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'busqueda',
        children: [
          {
            path: '',
            loadChildren: '../busqueda/busqueda.module#BusquedaPageModule'
          }
        ]
      },
      {
        path: 'reservas',
        children: [
          {
            path: '',
            loadChildren: '../reservas/reservas.module#ReservasPageModule'
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../perfil/perfil.module#PerfilPageModule'
          }
        ]
      },
      {
        path: 'horarios',
        children: [
          {
            path: '',
            loadChildren: '../horarios/horarios.module#HorariosPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/busqueda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/busqueda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
