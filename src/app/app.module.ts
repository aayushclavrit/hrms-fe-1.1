import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { ClassesModule } from './classes/classes.module';
import { EssentialsModule } from './essentials/essentials.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserDashboardModule,
    ClassesModule,
    EssentialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
