import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowButtonLeftComponent } from './arrow-button-left.component';

describe('ArrowButtonLeftComponent', () => {
  let component: ArrowButtonLeftComponent;
  let fixture: ComponentFixture<ArrowButtonLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowButtonLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowButtonLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
