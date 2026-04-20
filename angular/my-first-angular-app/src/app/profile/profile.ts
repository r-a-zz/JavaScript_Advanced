import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  readonly title = signal('Profile works!');
  readonly buttonLabel = signal('PROFILE BUTTON');
  readonly helloMessage = signal('');

  onProfileButtonClick(): void {
    this.buttonLabel.set('Button was clicked!');
    this.helloMessage.set('This got generated!');
  }
}
