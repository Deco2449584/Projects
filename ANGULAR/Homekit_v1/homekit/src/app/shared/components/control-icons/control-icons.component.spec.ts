import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlIconsComponent } from './control-icons.component';

describe('ControlIconsComponent', () => {
  let component: ControlIconsComponent;
  let fixture: ComponentFixture<ControlIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlIconsComponent]
    });
    fixture = TestBed.createComponent(ControlIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
