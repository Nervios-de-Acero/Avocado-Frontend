import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuscribirseComponent } from './card-suscribirse.component';

describe('CardSuscribirseComponent', () => {
  let component: CardSuscribirseComponent;
  let fixture: ComponentFixture<CardSuscribirseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSuscribirseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardSuscribirseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
