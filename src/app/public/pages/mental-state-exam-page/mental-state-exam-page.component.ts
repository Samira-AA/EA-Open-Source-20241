import { Component } from '@angular/core';
import {
  MentalStateExamCardsComponent
} from "../../../nursing/components/mental-state-exam-cards/mental-state-exam-cards.component";

@Component({
  selector: 'app-mental-state-exam-page',
  standalone: true,
  imports: [
    MentalStateExamCardsComponent
  ],
  templateUrl: './mental-state-exam-page.component.html',
  styleUrl: './mental-state-exam-page.component.css'
})
export class MentalStateExamPageComponent {

}
