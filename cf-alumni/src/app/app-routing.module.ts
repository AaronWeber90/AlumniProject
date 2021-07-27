import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDirComponent } from './alumni-dir/alumni-dir.component';
import { CareersComponent } from './careers/careers.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "stories", component: StoriesComponent
}, {
  path: "alumni", component: AlumniDirComponent
}, {
  path: "careers", component: CareersComponent
}, {
  path: "events", component: EventsComponent
}, {
  path: "login", component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
