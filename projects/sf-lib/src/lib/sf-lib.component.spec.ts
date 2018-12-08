import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfLibComponent } from './sf-lib.component';

describe('SfLibComponent', () => {
  let component: SfLibComponent;
  let fixture: ComponentFixture<SfLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
