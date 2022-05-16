import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomViewComponent } from './conference-room-view.component';

describe('ConferenceRoomViewComponent', () => {
  let component: ConferenceRoomViewComponent;
  let fixture: ComponentFixture<ConferenceRoomViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRoomViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRoomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
