import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../app-service/app.service';
import {AppWorkerService} from '../app-service/app-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  readonly url: string = 'http://localhost:3000/main.js';
  value: string = '';
  changed: boolean = false;

  inputValue: string = '';
  nestedInput: string  = '';
  childVisible: boolean = true;
  childTwoVisible: boolean = true;

  constructor(private readonly appService: AppService,
              private readonly workerService: AppWorkerService) {
  }

  ngOnInit(): void {
    console.log('Parent app component initialized');
  }

  ngOnDestroy(): void {
    console.log('Parent app component destroyed');
  }

  emitEvent(): void {
    this.appService.emitEvent(this.inputValue + ' window');
  }

  emitWorkerEvent(): void {
    this.workerService.emitEvent(this.inputValue + ' worker');
  }

  onRemoveChild(): void {
    this.childVisible = !this.childVisible;
  }

  onRemoveChildTwo(): void {
    this.childTwoVisible = !this.childTwoVisible;
  }

  onClick(): void {
    this.changed = true;
    this.value = this.inputValue;

    setTimeout(() => {
      this.changed = false;
      this.nestedInput = this.value;
      console.log('Parent app component emitted value', this.nestedInput);
    }, 1000);
  }

  onNestedOutput($event: any): void {
    this.changed = true;
    this.value = $event.detail;

    setTimeout(() => {
      this.changed = false;
      console.log('Parent app component received value', $event.detail);
    }, 1000);
  }
}
