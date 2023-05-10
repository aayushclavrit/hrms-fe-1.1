import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabComponent } from './tab/tab.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, TabComponent],
  imports: [CommonModule, AppRoutingModule],

  exports: [HeaderComponent, SidebarComponent, TabComponent],
})
export class EssentialsModule {}
