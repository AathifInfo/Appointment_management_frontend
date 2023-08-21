import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {


  appointment: Appointment = {
    appointmentType: '',
    date: '',
    amount: ''
  }

  submitted = false;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
  }


  saveAppointment(): void {
    const data = {
      appointmentType: this.appointment.appointmentType,
      date: this.appointment.date,
      amount: this.appointment.amount
    };

    this.appointmentService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      })
  }

  newAppointment(): void {
    this.submitted = false;
    this.appointment = {
      appointmentType: '',
      date: '',
      amount: ''
    }
  }



}
