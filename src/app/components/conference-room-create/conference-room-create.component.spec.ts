import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomCreateComponent } from './conference-room-create.component';

describe('ConferenceRoomCreateComponent', () => {
  let component: ConferenceRoomCreateComponent;
  let fixture: ComponentFixture<ConferenceRoomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRoomCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
