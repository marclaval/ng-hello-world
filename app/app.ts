import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
Counter: {{counter}}<br>
<button (click)="counter = counter - 1">Less</button>
<button (click)="counter = counter + 1">More</button>
`,
})
export class App {
  counter: number = 0;
}