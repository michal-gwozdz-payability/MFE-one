import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly url: string = 'http://localhost:3000/main.js';

  constructor() {
    // @ts-ignore
    console.log(PybIntegrationUtils)
  }
}
