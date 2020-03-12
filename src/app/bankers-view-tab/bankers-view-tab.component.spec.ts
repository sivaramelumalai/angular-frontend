import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankersViewTabComponent } from './bankers-view-tab.component';

describe('BankersViewTabComponent', () => {
  let component: BankersViewTabComponent;
  let fixture: ComponentFixture<BankersViewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankersViewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankersViewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
