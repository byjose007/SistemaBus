import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePage } from './detalle.page';

describe('DetallePage', () => {
  let component: DetallePage;
  let fixture: ComponentFixture<DetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
