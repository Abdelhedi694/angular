import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPage2Component } from './child-page2.component';

describe('ChildPage2Component', () => {
  let component: ChildPage2Component;
  let fixture: ComponentFixture<ChildPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
