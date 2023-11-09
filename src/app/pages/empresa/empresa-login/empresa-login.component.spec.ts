import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaLoginComponent } from './empresa-login.component';

describe('EmpresaLoginComponent', () => {
  let component: EmpresaLoginComponent;
  let fixture: ComponentFixture<EmpresaLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresaLoginComponent]
    });
    fixture = TestBed.createComponent(EmpresaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
