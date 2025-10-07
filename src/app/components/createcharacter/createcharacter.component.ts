import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


interface CheckboxItem {
  id: number;
  label: string;
  isChecked: boolean;
}


@Component({
  selector: 'app-createcharacter',
  imports: [ReactiveFormsModule],
  templateUrl: './createcharacter.component.html',
  styleUrl: './createcharacter.component.scss'
})
export class CreatecharacterComponent {
  backgrounds = ['Labor', 'Law', 'Trade', 'Military', 'Noble', 'Underworld'];
  heritages = ['The Dagger Isles', 'Iruvia', "Severos", 'Skolvan', 'Tycheros'];
  vices = ['Faith', 'Gablming', 'Luxury', 'Pleasure', 'Obligation', 'Stupor', 'Weird'];
  stress = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
    { id: 9, name: '9' }
  ];

  checkboxes: CheckboxItem[] = [
    { id: 1, label: 'Item 1', isChecked: false },
    { id: 2, label: 'Item 2', isChecked: false },
    { id: 3, label: 'Item 3', isChecked: false },
    { id: 4, label: 'Item 4', isChecked: false },
  ];

  characterForm = new FormGroup({
    characterName: new FormControl(''),
    characterAlias: new FormControl(''),
    characterBackground: new FormControl(''),
    characterBackgroundNotes: new FormControl(''),
    characterHeritage: new FormControl(''),
    characterHeritageNotes: new FormControl(''),
    characterVice: new FormControl(''),
    characterViceNotes: new FormControl(''),

    stress: new FormControl()

  });

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  onCheckboxChange(index: number, isChecked: boolean): void {
    // Update the clicked checkbox's state
    this.checkboxes[index].isChecked = isChecked;

    if (isChecked) {
      // If the current checkbox is checked, check all preceding ones
      for (let i = 0; i < index; i++) {
        this.checkboxes[i].isChecked = true;
      }
    } else {
      // If the current checkbox is unchecked, uncheck all subsequent ones
      // (This is an optional behavior, but often desired for consistency)
      // for (let i = index; i < this.checkboxes.length; i--) {
      //   this.checkboxes[i].isChecked = false;
      //   console.log(index)
      // }
    }
  }

}
