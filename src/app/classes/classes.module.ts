import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { TimeOffComponent } from './time-off/time-off.component';
import { DocumentsComponent } from './documents/documents.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { TrainingComponent } from './training/training.component';
import { AssetsComponent } from './assets/assets.component';
import { EssentialsModule } from '../essentials/essentials.module';
import { DirectoryComponent } from './directory/directory.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    JobComponent,
    TimeOffComponent,
    DocumentsComponent,
    BenefitsComponent,
    TrainingComponent,
    AssetsComponent,
    DirectoryComponent,
    OrgchartComponent,
    ProfileComponent,
    ContactComponent,
  ],
  exports: [
    JobComponent,
    TimeOffComponent,
    DocumentsComponent,
    BenefitsComponent,
    TrainingComponent,
    AssetsComponent,
    DirectoryComponent,
    OrgchartComponent,
    ProfileComponent,
    ContactComponent,
  ],
  imports: [CommonModule, AppRoutingModule, EssentialsModule],
})
export class ClassesModule {}
