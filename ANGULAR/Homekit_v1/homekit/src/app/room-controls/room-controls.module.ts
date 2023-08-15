import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightControlComponent } from './light-control/light-control.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';



@NgModule({
  declarations: [
    LightControlComponent,
    RemoteControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoomControlsModule { }
