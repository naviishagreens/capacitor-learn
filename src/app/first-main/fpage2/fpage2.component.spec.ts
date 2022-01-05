import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpage2Component } from './fpage2.component';

describe('Fpage2Component', () => {
  let component: Fpage2Component;
  let fixture: ComponentFixture<Fpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
