import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamCardsComponent } from './mental-state-exam-cards.component';

describe('MentalStateExamCardsComponent', () => {
  let component: MentalStateExamCardsComponent;
  let fixture: ComponentFixture<MentalStateExamCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalStateExamCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalStateExamCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
