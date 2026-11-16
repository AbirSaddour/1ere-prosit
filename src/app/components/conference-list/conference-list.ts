import { Component } from '@angular/core';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: 'Nouveautés d\'Angular 21', date: new Date('2027-11-15'), place: 'Tunis', maxParticipants: 100, nbParticipants: 75 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier sur les signals', date: new Date('2027-11-30'), place: 'Ariana', maxParticipants: 50, nbParticipants: 44 },
    { id: 3, title: 'Web Conference', description: 'Le web de demain', date: new Date('2027-11-20'), place: 'Sousse', maxParticipants: 80, nbParticipants: 80 },
  ];
}