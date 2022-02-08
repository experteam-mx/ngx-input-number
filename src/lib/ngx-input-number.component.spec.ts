import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputNumberComponent } from './ngx-input-number.component';

describe('NgxInputNumberComponent', () => {
  let component: NgxInputNumberComponent;
  let fixture: ComponentFixture<NgxInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxInputNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
