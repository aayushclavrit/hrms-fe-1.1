import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { PeopleComponent } from './people/people.component';
import { HiringComponent } from './hiring/hiring.component';
import { AppRoutingModule } from '../app-routing.module';
import { EssentialsModule } from '../essentials/essentials.module';

@NgModule({
  declarations: [
    HomeComponent,
    MyInfoComponent,
    PeopleComponent,
    HiringComponent,
  ],
  exports: [HomeComponent, MyInfoComponent, PeopleComponent, HiringComponent],
  imports: [CommonModule, AppRoutingModule, EssentialsModule],
})
export class UserDashboardModule {}
