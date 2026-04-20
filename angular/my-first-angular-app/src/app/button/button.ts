import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  count = 0;

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count -= 1;
    }
  }

  reset(): void {
    this.count = 0;
  }
}
