import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDisplaysComponent } from './sensor-displays.component';

describe('SensorDisplaysComponent', () => {
  let component: SensorDisplaysComponent;
  let fixture: ComponentFixture<SensorDisplaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensorDisplaysComponent]
    });
    fixture = TestBed.createComponent(SensorDisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
