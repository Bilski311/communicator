import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAltButtonComponent } from './form-alt-button.component';

describe('FormAltButtonComponent', () => {
  let component: FormAltButtonComponent;
  let fixture: ComponentFixture<FormAltButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAltButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAltButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
