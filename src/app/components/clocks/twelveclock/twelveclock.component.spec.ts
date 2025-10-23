import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveclockComponent } from './twelveclock.component';

describe('TwelveclockComponent', () => {
  let component: TwelveclockComponent;
  let fixture: ComponentFixture<TwelveclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwelveclockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelveclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
