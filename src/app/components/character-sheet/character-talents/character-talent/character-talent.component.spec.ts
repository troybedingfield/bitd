import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentComponent } from './character-talent.component';

describe('CharacterTalentComponent', () => {
  let component: CharacterTalentComponent;
  let fixture: ComponentFixture<CharacterTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTalentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
