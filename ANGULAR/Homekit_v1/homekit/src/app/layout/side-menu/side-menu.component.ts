import { Component, OnInit } from '@angular/core';
import { Room } from '../../core/models/room.model'; // Asume que la ubicación del modelo es esta, ajusta si es necesario

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  rooms: Room[] = [
    { id: 1, name: 'Habitación 1', devices: [] },
    { id: 2, name: 'Habitación 2', devices: [] },
    { id: 3, name: 'Habitación 3', devices: [] },
    { id: 4, name: 'Habitación 4', devices: [] },
    { id: 5, name: 'Habitación 5', devices: [] },
  ];

  visibleRoomId: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  toggleRoom(id: number): void {
    if (this.visibleRoomId === id) {
      this.visibleRoomId = null;
    } else {
      this.visibleRoomId = id;
    }
  }

  isRoomVisible(id: number): boolean {
    return this.visibleRoomId === id;
  }
}
