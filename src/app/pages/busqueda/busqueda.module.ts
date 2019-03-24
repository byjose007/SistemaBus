import { BusquedaPage } from './busqueda.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { PopoverSearchPage } from './../popover-search/popover-search.page';
import { PopoverSearchPageModule } from '../popover-search/popover-search.module';
import { RouterModule, Routes } from '@angular/router';



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
    PopoverSearchPageModule,
    RouterModule.forChild(routes),

  ],
  entryComponents: [PopoverSearchPage],
  declarations: [BusquedaPage]
})
export class BusquedaPageModule { }
