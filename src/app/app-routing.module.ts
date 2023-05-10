import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringComponent } from './user-dashboard/hiring/hiring.component';
import { HomeComponent } from './user-dashboard/home/home.component';
import { MyInfoComponent } from './user-dashboard/my-info/my-info.component';
import { PeopleComponent } from './user-dashboard/people/people.component';
import { JobComponent } from './classes/job/job.component';
import { TimeOffComponent } from './classes/time-off/time-off.component';
import { DocumentsComponent } from './classes/documents/documents.component';
import { BenefitsComponent } from './classes/benefits/benefits.component';
import { TrainingComponent } from './classes/training/training.component';
import { AssetsComponent } from './classes/assets/assets.component';
import { DirectoryComponent } from './classes/directory/directory.component';
import { OrgchartComponent } from './classes/orgchart/orgchart.component';
import { ProfileComponent } from './classes/profile/profile.component';
import { ContactComponent } from './classes/contact/contact.component';

const routes: Routes = [
  {
    path: 'hiring',
    component: HiringComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'my-info',
    component: MyInfoComponent,
  },
  {
    path: 'people',
    component: PeopleComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: 'time-off',
    component: TimeOffComponent,
  },
  {
    path: 'documents',
    component: DocumentsComponent,
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
  },
  {
    path: 'training',
    component: TrainingComponent,
  },
  {
    path: 'assets',
    component: AssetsComponent,
  },
  {
    path: 'directory',
    component: DirectoryComponent,
  },
  {
    path: 'orgchart',
    component: OrgchartComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
