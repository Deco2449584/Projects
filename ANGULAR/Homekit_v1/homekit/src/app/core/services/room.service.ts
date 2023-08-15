import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private baseUrl = 'http://your-node-red-url/rooms';

  constructor(private http: HttpClient) {}

  getDevicesInRoom(roomId: string): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.baseUrl}/${roomId}/devices`);
  }

  addDeviceToRoom(roomId: string, device: Device): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}/${roomId}/add-device`, device);
  }

  removeDeviceFromRoom(roomId: string, deviceId: string): Observable<Room> {
    return this.http.delete<Room>(
      `${this.baseUrl}/${roomId}/remove-device/${deviceId}`
    );
  }
  // En room.service.ts

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }

  // Puedes añadir más métodos según tus necesidades.
}
