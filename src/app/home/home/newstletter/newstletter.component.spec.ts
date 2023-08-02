/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewstletterComponent } from './newstletter.component';

describe('NewstletterComponent', () => {
  let component: NewstletterComponent;
  let fixture: ComponentFixture<NewstletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
