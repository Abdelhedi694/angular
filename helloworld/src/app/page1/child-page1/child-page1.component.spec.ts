import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPage1Component } from './child-page1.component';

describe('ChildPage1Component', () => {
  let component: ChildPage1Component;
  let fixture: ComponentFixture<ChildPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
