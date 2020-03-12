import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTransactionsComponent } from './overall-transactions.component';

describe('OverallTransactionsComponent', () => {
  let component: OverallTransactionsComponent;
  let fixture: ComponentFixture<OverallTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
