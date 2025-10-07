import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterHealthComponent } from './character-health.component';

describe('CharacterHealthComponent', () => {
  let component: CharacterHealthComponent;
  let fixture: ComponentFixture<CharacterHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterHealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
