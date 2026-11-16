import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  show = signal(true);

  toggle() {
    this.show.update(v => !v);
  }
}