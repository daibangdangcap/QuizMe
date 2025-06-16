import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowButtonRightComponent } from './arrow-button-right.component';

describe('ArrowButtonComponent', () => {
  let component: ArrowButtonRightComponent;
  let fixture: ComponentFixture<ArrowButtonRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowButtonRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowButtonRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
