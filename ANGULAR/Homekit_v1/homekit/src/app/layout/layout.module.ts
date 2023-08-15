import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayoutComponent, SideMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent, MainLayoutComponent],
})
export class LayoutModule {}
