import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { UserProfile } from './components/user-profile/user-profile';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { Footer } from './components/footer/footer';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Navbar, UserProfile, FriendsList, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}