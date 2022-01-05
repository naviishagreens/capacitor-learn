import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spage1Component } from './spage1.component';

describe('Spage1Component', () => {
  let component: Spage1Component;
  let fixture: ComponentFixture<Spage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Spage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Spage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
