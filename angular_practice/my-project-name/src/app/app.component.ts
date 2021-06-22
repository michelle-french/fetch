import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Funky Monkey';
  name: string = 'Michelle French';
  itemList: string[] = ['Actias Luna', 'Appias Zarinda', 'Delias Pasithae', 'Morpho Menelaus'];
}
