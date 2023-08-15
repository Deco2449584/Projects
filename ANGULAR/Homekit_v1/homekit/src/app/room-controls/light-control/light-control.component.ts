// src/app/room-controls/light-control/light-control.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../../core/services/device.service';
import { Device } from '../../core/models/device.model';

@Component({
  selector: 'app-light-control',
  templateUrl: './light-control.component.html',
  styleUrls: ['./light-control.component.scss'],
})
export class LightControlComponent implements OnInit {
  @Input() device!: Device; // Asumimos que el componente padre le proporcionará el dispositivo que debe controlar

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    // Puedes cargar cualquier estado inicial aquí, si es necesario.
  }

  toggleLight(): void {
    // Llamada al servicio para encender o apagar la luz.
    this.deviceService
      .toggleDevice(this.device.id)
      .subscribe((updatedDevice) => {
        this.device = updatedDevice;
      });
  }
}
