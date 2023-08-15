// src/app/shared/components/sensor-displays/sensor-displays.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sensor-displays',
  templateUrl: './sensor-displays.component.html',
  styleUrls: ['./sensor-displays.component.scss'],
})
export class SensorDisplaysComponent {
  @Input() sensorData: any; // Aquí puedes ser más específico con el tipo, basado en los datos que esperas.
}
