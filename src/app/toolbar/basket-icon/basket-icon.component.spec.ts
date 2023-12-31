/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasketIconComponent } from './basket-icon.component';

describe('BasketIconComponent', () => {
  let component: BasketIconComponent;
  let fixture: ComponentFixture<BasketIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
