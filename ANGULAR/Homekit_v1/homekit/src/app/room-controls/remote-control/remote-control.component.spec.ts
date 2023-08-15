import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteControlComponent } from './remote-control.component';

describe('RemoteControlComponent', () => {
  let component: RemoteControlComponent;
  let fixture: ComponentFixture<RemoteControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteControlComponent]
    });
    fixture = TestBed.createComponent(RemoteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
