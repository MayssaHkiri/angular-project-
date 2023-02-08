import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhouloudComponent } from './khouloud.component';

describe('KhouloudComponent', () => {
  let component: KhouloudComponent;
  let fixture: ComponentFixture<KhouloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhouloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhouloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
