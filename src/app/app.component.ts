import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  menuName = ["Name 1", "Name 2", "Name 3"];

  onNavClick() {
    console.log("app-navigation.onNavClick");
  }
}
