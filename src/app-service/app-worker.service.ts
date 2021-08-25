import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class AppWorkerService implements OnDestroy {
  private readonly worker: Worker;

  constructor() {
    console.log('Parent Worker Service created');

    this.worker = new Worker(new URL('../app/app.worker', import.meta.url));
    this.worker.addEventListener('rail', this.onEventEmitted);
    (window as any).worker = this.worker;
  }

  onEventEmitted({ detail }: any): void {
    console.log('Parent Worker Service value received', detail);
  }

  emitEvent(value: string): void {
    console.log('Parent Worker Service value emitted', value);
    this.worker.dispatchEvent(new CustomEvent('rail', { detail: value }));
  }

  ngOnDestroy() {
    console.log('Parent Worker Service destroyed');
    this.worker.removeEventListener('rail', this.onEventEmitted);
    this.worker.terminate();
  }
}
