import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoductsComponent } from './roducts.component';

describe('RoductsComponent', () => {
  let component: RoductsComponent;
  let fixture: ComponentFixture<RoductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoductsComponent]
    });
    fixture = TestBed.createComponent(RoductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
