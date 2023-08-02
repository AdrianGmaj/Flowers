/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DividerSingUpComponent } from './divider-sing-up.component';

describe('DividerSingUpComponent', () => {
  let component: DividerSingUpComponent;
  let fixture: ComponentFixture<DividerSingUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerSingUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
