import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCMainComponent } from './second-cmain.component';

describe('SecondCMainComponent', () => {
  let component: SecondCMainComponent;
  let fixture: ComponentFixture<SecondCMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
