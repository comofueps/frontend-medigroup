import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgresoComponent } from './list-progreso.component';

describe('ListProgresoComponent', () => {
  let component: ListProgresoComponent;
  let fixture: ComponentFixture<ListProgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProgresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
