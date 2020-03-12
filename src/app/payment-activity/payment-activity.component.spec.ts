import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentActivityComponent } from './payment-activity.component';

describe('PaymentActivityComponent', () => {
  let component: PaymentActivityComponent;
  let fixture: ComponentFixture<PaymentActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
