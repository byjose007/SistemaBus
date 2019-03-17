import { PopoverSearchPage } from './../popover-search/popover-search.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusquedaPage } from './busqueda.page';
import { PopoverSearchPageModule } from '../popover-search/popover-search.module';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
  ],
  entryComponents: [PopoverSearchPage],
  declarations: [BusquedaPage,PopoverSearchPage]
})
export class BusquedaPageModule {}
