import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoNLComponent } from './contacto-nl.component';

describe('ContactoNLComponent', () => {
  let component: ContactoNLComponent;
  let fixture: ComponentFixture<ContactoNLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoNLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoNLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
