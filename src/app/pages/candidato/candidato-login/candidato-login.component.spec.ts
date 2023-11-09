import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoLoginComponent } from './candidato-login.component';

describe('CandidatoLoginComponent', () => {
  let component: CandidatoLoginComponent;
  let fixture: ComponentFixture<CandidatoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatoLoginComponent]
    });
    fixture = TestBed.createComponent(CandidatoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
