import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHorizontalComponent } from './chart-horizontal.component';

describe('ChartHorizontalComponent', () => {
  let component: ChartHorizontalComponent;
  let fixture: ComponentFixture<ChartHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
