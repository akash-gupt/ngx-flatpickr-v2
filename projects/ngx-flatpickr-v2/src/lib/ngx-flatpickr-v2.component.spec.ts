import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlatpickrV2Component } from './ngx-flatpickr-v2.component';

describe('NgxFlatpickrV2Component', () => {
  let component: NgxFlatpickrV2Component;
  let fixture: ComponentFixture<NgxFlatpickrV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlatpickrV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlatpickrV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
