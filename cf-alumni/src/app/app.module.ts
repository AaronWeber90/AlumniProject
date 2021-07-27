import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoriesComponent } from './stories/stories.component';
import { AlumniDirComponent } from './alumni-dir/alumni-dir.component';
import { CareersComponent } from './careers/careers.component';
import { EventsComponent } from './events/events.component';
import { PurposeInfoComponent } from './purpose-info/purpose-info.component';
import { PopularCardsComponent } from './popular-cards/popular-cards.component';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    StoriesComponent,
    AlumniDirComponent,
    CareersComponent,
    EventsComponent,
    PurposeInfoComponent,
    PopularCardsComponent,
    HeroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
