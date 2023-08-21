import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  appointments?: Appointment[];
  currentAppointment: Appointment = {};
  currentIndex = -1;
  type = "";

  constructor(private appointmentService: AppointmentService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.retriveAppointments();
  }

  downloadExcel() {
    this.http.get('http://localhost:8080/api/excel/download', { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'AppointmentDetails.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error downloading Excel file', error);
      }
    );
  }

  retriveAppointments(): void {
    this.appointmentService.getAll()
      .subscribe({
        next: (data) => {
          this.appointments = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retriveAppointments;
    this.currentAppointment = {};
    this.currentIndex = -1;
  }

  setActiveAppointment(appointment: Appointment, index: number): void {
    this.currentAppointment = appointment;
    this.currentIndex = index;
  }

  removeAllAppointments(): void {
    this.appointmentService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }


  searchType(): void {
    this.currentAppointment = {};
    this.currentIndex = -1;

    this.appointmentService.findByType(this.type)
      .subscribe({
        next: (data) => {
          this.appointments = data;
          console.log(data)
        },
        error: (e) => console.error(e)
      })
  }

  gotoList() {
    this.router.navigate(['/add']);
  }

}
