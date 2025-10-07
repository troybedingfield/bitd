import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTalentsComponent } from './character-talents.component';

describe('CharacterTalentsComponent', () => {
  let component: CharacterTalentsComponent;
  let fixture: ComponentFixture<CharacterTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTalentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
