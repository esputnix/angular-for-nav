import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  names = ["Nav Link 4", "Nav Link 5", "Nav Link 6"];

  onNavClick() {
    console.log("app-navigation.onNavClick");
  }
}
