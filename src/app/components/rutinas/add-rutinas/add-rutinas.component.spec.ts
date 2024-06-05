import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRutinasComponent } from './add-rutinas.component';

describe('AddRutinasComponent', () => {
  let component: AddRutinasComponent;
  let fixture: ComponentFixture<AddRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRutinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
