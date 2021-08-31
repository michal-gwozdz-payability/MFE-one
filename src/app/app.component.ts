import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly url: string = 'http://localhost:3000/main.js';

  loading: boolean = false;
  // @ts-ignore
  integration: PybMpIntegration = null;

  configuration = {
    logo: 'test',
    label: 'test',
    mpKey: 'test',
    login: 'test'
  }

  setIntegration(): void {
    this.integration = {
      authId: 'test',
      password: 'test',
      login: 'test'
    }
  }

  setLoading($event: boolean): void {
    this.loading = $event;
  }
}
