import { Routes } from '@angular/router';
import {TheHomeContentComponent} from "./public/components/the-home-content/the-home-content.component";
import {
  MentalStateExamCardsComponent
} from "./nursing/components/mental-state-exam-cards/mental-state-exam-cards.component";
import {PageNotFundComponent} from "./public/components/page-not-fund/page-not-fund.component";
import {MentalStateExamPageComponent} from "./public/pages/mental-state-exam-page/mental-state-exam-page.component";

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home',component:TheHomeContentComponent},
  {path:'nursing/mental-state-exams', component:MentalStateExamPageComponent},
  {path:'**', component:PageNotFundComponent},
];
