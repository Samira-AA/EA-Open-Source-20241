import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NursingApiService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getPatients():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+`/patients`);
  }

  getExaminers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+`/examiners`);
  }

  getExaminerById(examinerId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/examiners/${examinerId}`);
  }

  getMentalState():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+`/mental-state-exams`);
  }

  getMentalStateExamByPatientId(patientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mental-state-exams?patientId=${patientId}`);
  }

}
