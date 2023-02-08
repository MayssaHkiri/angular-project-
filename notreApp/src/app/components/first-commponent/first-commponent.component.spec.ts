import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCommponentComponent } from './first-commponent.component';

describe('FirstCommponentComponent', () => {
  let component: FirstCommponentComponent;
  let fixture: ComponentFixture<FirstCommponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCommponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
