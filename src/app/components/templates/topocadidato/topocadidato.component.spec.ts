import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopocadidatoComponent } from './topocadidato.component';

describe('TopocadidatoComponent', () => {
  let component: TopocadidatoComponent;
  let fixture: ComponentFixture<TopocadidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopocadidatoComponent]
    });
    fixture = TestBed.createComponent(TopocadidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
