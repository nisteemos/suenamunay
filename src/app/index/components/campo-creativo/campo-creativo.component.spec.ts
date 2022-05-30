import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoCreativoComponent } from './campo-creativo.component';

describe('CampoCreativoComponent', () => {
  let component: CampoCreativoComponent;
  let fixture: ComponentFixture<CampoCreativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoCreativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoCreativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
