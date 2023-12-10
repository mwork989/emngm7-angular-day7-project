import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsNewsComponent } from './us-news.component';

describe('UsNewsComponent', () => {
  let component: UsNewsComponent;
  let fixture: ComponentFixture<UsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
