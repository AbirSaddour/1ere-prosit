import { Component, signal } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  user = signal<User>({ name: 'Ahmed', email: 'ahmed@gmail.com' });
}
