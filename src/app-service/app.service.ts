import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class AppService implements OnDestroy {
  private readonly listener = ($event: any) => this.onEventEmitted(($event as CustomEvent).detail);

  constructor() {
    console.log('Parent Service created');
    window.addEventListener('rail', this.listener)
  }

  onEventEmitted($event: string): void {
    console.log('Parent Service value received', $event);
  }

  emitEvent(value: string): void {
    console.log('Parent Service value emitted', value);
    window.dispatchEvent(new CustomEvent('rail', {detail: value}))
  }

  ngOnDestroy() {
    console.log('Parent Service destroyed');
    window.removeEventListener('rail', this.listener);
  }
}
