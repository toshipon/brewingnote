/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JournalIndexComponent } from './journal-index.component';

describe('JournalIndexComponent', () => {
  let component: JournalIndexComponent;
  let fixture: ComponentFixture<JournalIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
