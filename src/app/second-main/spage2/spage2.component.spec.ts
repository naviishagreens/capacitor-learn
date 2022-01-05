import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spage2Component } from './spage2.component';

describe('Spage2Component', () => {
  let component: Spage2Component;
  let fixture: ComponentFixture<Spage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Spage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
