import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  changeColorTikect = false;


  selectedTikect(){
    console.log('liss');
    this.changeColorTikect = true;
    
  }
}
