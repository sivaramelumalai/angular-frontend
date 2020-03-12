import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayNeftComponent } from './pay-neft.component';

describe('PayNeftComponent', () => {
  let component: PayNeftComponent;
  let fixture: ComponentFixture<PayNeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayNeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayNeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
