import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpage1Component } from './fpage1.component';

describe('Fpage1Component', () => {
  let component: Fpage1Component;
  let fixture: ComponentFixture<Fpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fpage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
