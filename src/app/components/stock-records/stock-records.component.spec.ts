import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRecordsComponent } from './stock-records.component';

describe('StockRecordsComponent', () => {
  let component: StockRecordsComponent;
  let fixture: ComponentFixture<StockRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
