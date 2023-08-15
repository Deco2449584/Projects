import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightControlComponent } from './light-control.component';

describe('LightControlComponent', () => {
  let component: LightControlComponent;
  let fixture: ComponentFixture<LightControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightControlComponent]
    });
    fixture = TestBed.createComponent(LightControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
