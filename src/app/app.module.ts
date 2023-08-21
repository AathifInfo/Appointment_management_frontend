import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsListComponent } from './components/appointments-list/appointments-list.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsListComponent,
    AddAppointmentComponent,
    AppointmentDetailsComponent,
    HomePageComponent,
    HomeBannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
