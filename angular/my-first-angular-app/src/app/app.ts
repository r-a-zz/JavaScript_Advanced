import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal("Hey I'm Raj");
  // protected readonly title = "Hey I'm Raj");     If this is done, i.e.,if title is declared string, then inside the constructor it's too taken as  string.
  
  constructor() {
    this.title.set("This is the New Title");
    // this.title="This is the New Title";
  }
}