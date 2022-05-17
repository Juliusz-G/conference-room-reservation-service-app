import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomEditComponent } from './conference-room-edit.component';

describe('ConferenceRoomEditComponent', () => {
  let component: ConferenceRoomEditComponent;
  let fixture: ComponentFixture<ConferenceRoomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRoomEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRoomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
