import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NursingApiService} from "../../services/nursing-api.service.service";
import {Patient} from "../../models/patients.entity";
import {MentalStateExam} from "../../models/mental-state-exams.entity";
import {Examiner} from "../../models/examiners.entity";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-mental-state-exam-cards',
  standalone: true,
  imports: [MatCardModule, NgForOf, NgIf],
  templateUrl: './mental-state-exam-cards.component.html',
  styleUrl: './mental-state-exam-cards.component.css'
})
export class MentalStateExamCardsComponent implements OnInit{

  patients : Patient[] = [];
  mentalStateExam : MentalStateExam[] = [];
  examiners:Examiner[] = [];

  //donde vamos a unir todos los datos que nos piden en el exam
  examData: any[] = [];

  constructor(private nursingApiService: NursingApiService) {

  }

  ngOnInit() {
    this.getExamData();
  }


  getPatients() {
    this.nursingApiService.getPatients().subscribe(
      patients => {
        this.patients = patients;
        console.log(this.patients);
      }
    );
  }

  getMentalState() {
    this.nursingApiService.getMentalState().subscribe(
      mentalStateExams => {
        this.mentalStateExam = mentalStateExams;
        console.log(this.getMentalState);
        this.getExaminers();
      }
    );
  }

  getExaminers() {
    this.nursingApiService.getExaminers().subscribe(
      examiners => {
        this.examiners = examiners;
        console.log(this.examiners);
      }
    );
  }

  //para pushear todos los datos en el arreglo
  getExamData() {
    //uso el service para obtener a los patients
    this.nursingApiService.getPatients().subscribe(
      (patients: Patient[]) => {
        //itero a los pacientes
        patients.forEach((patient: Patient) => {
          //llamo a mi service para usar el get por Id y le paso como parámetro el id del patient
          this.nursingApiService.getMentalStateExamByPatientId(patient.id).subscribe(
            (mentalStateExams: MentalStateExam[]) => {
              //ahora itero sobre mis mental state exams
              mentalStateExams.forEach((mentalStateExam: MentalStateExam) => {
                //uso mi get examiner by id para cada mentalStateExam y le paso por parámetro el id del examiner
                this.nursingApiService.getExaminerById(mentalStateExam.examinerId).subscribe(
                  (examiner: Examiner) => {
                    //hago push al arreglo con todo lo que obtuve
                    this.examData.push({
                      patient: patient,
                      mentalStateExam: mentalStateExam,
                      examiner: examiner,
                      //hago que calcule el total score con el mentalstatexam y sale para cada uno de los patients
                      totalScore: this.TotalScore(mentalStateExam)
                    });
                  }
                );
              });
            }
          );
        });
      }
    );
  }

  TotalScore(mentalStateExam: MentalStateExam): number {
    return (
      mentalStateExam.orientationScore +
      mentalStateExam.registrationScore +
      mentalStateExam.attentionAndCalculationScore +
      mentalStateExam.recallScore +
      mentalStateExam.languageScore
    );
  }


}
