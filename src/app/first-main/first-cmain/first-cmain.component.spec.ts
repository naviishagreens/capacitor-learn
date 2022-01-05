import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCMainComponent } from './first-cmain.component';

describe('FirstCMainComponent', () => {
  let component: FirstCMainComponent;
  let fixture: ComponentFixture<FirstCMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
