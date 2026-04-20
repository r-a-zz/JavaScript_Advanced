import { Component, signal } from '@angular/core';
import { Button } from './button/button';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Profile, Button],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Signals for reactive interpolation practice
  readonly title = signal('This heading is reactive');
  readonly heading = signal('This is the heading');
  readonly body = signal('This is the body');

  // Normal vars vs signal vars
  a = 4;
  b = 3;
  c = signal(4);
  d = signal(5);

  changeTitle(): void {
    this.title.set('Clicked!');
  }
}
