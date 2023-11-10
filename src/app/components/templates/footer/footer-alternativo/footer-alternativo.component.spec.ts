import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAlternativoComponent } from './footer-alternativo.component';

describe('FooterAlternativoComponent', () => {
  let component: FooterAlternativoComponent;
  let fixture: ComponentFixture<FooterAlternativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterAlternativoComponent]
    });
    fixture = TestBed.createComponent(FooterAlternativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
