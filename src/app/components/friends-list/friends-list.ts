import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Friend } from '../../models/friend';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  userName = signal('Ahmed');

  friends = signal<Friend[]>([
    { id: 1, name: 'Sami' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Amine' },
  ]);
}
