import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlIconsComponent } from './components/control-icons/control-icons.component';
import { SensorDisplaysComponent } from './components/sensor-displays/sensor-displays.component';



@NgModule({
  declarations: [
    ControlIconsComponent,
    SensorDisplaysComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
