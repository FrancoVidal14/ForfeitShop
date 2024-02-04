import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderInicioComponent } from './slider-inicio.component';

describe('SliderInicioComponent', () => {
  let component: SliderInicioComponent;
  let fixture: ComponentFixture<SliderInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
