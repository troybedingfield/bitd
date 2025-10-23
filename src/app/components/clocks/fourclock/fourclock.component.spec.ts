import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourclockComponent } from './fourclock.component';

describe('FourclockComponent', () => {
  let component: FourclockComponent;
  let fixture: ComponentFixture<FourclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourclockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
