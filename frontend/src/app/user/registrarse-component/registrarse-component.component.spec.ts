import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseComponentComponent } from './registrarse-component.component';

describe('RegistrarseComponentComponent', () => {
  let component: RegistrarseComponentComponent;
  let fixture: ComponentFixture<RegistrarseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarseComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
