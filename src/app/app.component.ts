import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  menus = ["Menu 1", "Menu 2", "Menu 3"];

  onNavClick() {
    console.log("app-navigation.onNavClick");
  }
}
