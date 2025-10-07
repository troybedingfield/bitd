import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieCheckboxComponent } from './pie-checkbox.component';

describe('PieCheckboxComponent', () => {
  let component: PieCheckboxComponent;
  let fixture: ComponentFixture<PieCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
