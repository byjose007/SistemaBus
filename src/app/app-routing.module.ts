import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'busqueda',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'busqueda', loadChildren: './pages/busqueda/busqueda.module#BusquedaPageModule' },
  { path: 'horarios', loadChildren: './pages/horarios/horarios.module#HorariosPageModule' },
  { path: 'popover-search', loadChildren: './pages/popover-search/popover-search.module#PopoverSearchPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
