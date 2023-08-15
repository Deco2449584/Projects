import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  // Asumiendo que tienes un endpoint base para tus dispositivos en Node-RED.
  private baseUrl = 'http://your-node-red-url/devices';

  constructor(private http: HttpClient) {}

  getDeviceStatus(deviceId: string): Observable<Device> {
    return this.http.get<Device>(`${this.baseUrl}/status/${deviceId}`);
  }

  toggleDevice(deviceId: string): Observable<Device> {
    return this.http.post<Device>(`${this.baseUrl}/toggle/${deviceId}`, {});
  }

  getDeviceDetails(deviceId: string): Observable<Device> {
    return this.http.get<Device>(`${this.baseUrl}/details/${deviceId}`);
  }

  // Puedes añadir más métodos según tus necesidades.
}
