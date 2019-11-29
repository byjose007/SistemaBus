import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },  
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'horarios', loadChildren: './pages/horarios/horarios.module#HorariosPageModule' },
  { path: 'popover-search', loadChildren: './pages/popover-search/popover-search.module#PopoverSearchPageModule' },
  { path: 'detalle', loadChildren: './pages/detalle/detalle.module#DetallePageModule' },
  { path: 'info-personal', loadChildren: './pages/info-personal/info-personal.module#InfoPersonalPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
