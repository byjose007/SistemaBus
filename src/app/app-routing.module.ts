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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
