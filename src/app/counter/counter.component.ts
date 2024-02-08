import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <input type="button" value="-1" (click)="decrementar()">
  <input type="button" value="RESET">
  <input type="button" value="+1" (click)="incrementar()">
  `,
  styles: ``
})
export class CounterComponent {

  private _counter: number = 10;

  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }

  incrementar (): void {
    this.counter=this.counter+1;
  }

  decrementar (): void {
    this.counter=this.counter-1;
  }

  reset (): void {
    this.counter=10;
  }

}
