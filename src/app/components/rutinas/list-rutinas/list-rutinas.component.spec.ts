import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRutinasComponent } from './list-rutinas.component';

describe('ListRutinasComponent', () => {
  let component: ListRutinasComponent;
  let fixture: ComponentFixture<ListRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRutinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
