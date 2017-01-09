/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuppingIndexComponent } from './cupping-index.component';

describe('CuppingIndexComponent', () => {
  let component: CuppingIndexComponent;
  let fixture: ComponentFixture<CuppingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuppingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuppingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
