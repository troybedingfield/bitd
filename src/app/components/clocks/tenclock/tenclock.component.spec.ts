import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenclockComponent } from './tenclock.component';

describe('TenclockComponent', () => {
  let component: TenclockComponent;
  let fixture: ComponentFixture<TenclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenclockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
