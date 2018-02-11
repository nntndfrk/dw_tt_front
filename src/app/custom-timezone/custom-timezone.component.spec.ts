import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimezoneComponent } from './custom-timezone.component';

describe('CustomTimezoneComponent', () => {
  let component: CustomTimezoneComponent;
  let fixture: ComponentFixture<CustomTimezoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTimezoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
