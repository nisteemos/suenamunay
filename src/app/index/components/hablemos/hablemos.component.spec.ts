import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HablemosComponent } from './hablemos.component';

describe('HablemosComponent', () => {
  let component: HablemosComponent;
  let fixture: ComponentFixture<HablemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HablemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HablemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
