import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

const baseUrl = 'http://localhost:8080/api/appointment'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${baseUrl}/get`);
  }

  get(id: any): Observable<Appointment> {
    return this.http.get<Appointment>(`${baseUrl}/get/${id}`);  
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data); 
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any>{ 
    return this.http.delete(`${baseUrl}/deleteAll`);
  }

  findByType(type: any): Observable<Appointment[]> {
    return this.http.get<Appointment[]>( `${baseUrl}/get?type=${type}`);
  }

}

