import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CharacterTalents, hunt, study } from './character-talents.model';
import { Subscription, startWith, pairwise } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-character-talents',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './character-talents.component.html',
  styleUrl: './character-talents.component.scss'
})
export class CharacterTalentsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  userId: string | null = null;
  @Input() charId: any;
  @Input() data: any[] = [];
  @Input() user: any;
  editMode = false;

  loadedTalents: CharacterTalents[] = [];
  subscription: Subscription = new Subscription;

  id!: number;
  isFetching: boolean = false;
  insightNumber: number = 0;

  characterTalents = new UntypedFormGroup({
    hunt: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    study: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    survey: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    tinker: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    finesse: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    prowl: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    skirmish: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    wreck: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    attune: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    command: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    consort: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
    sway: new UntypedFormGroup({
      level1: new UntypedFormControl(false),
      level2: new UntypedFormControl(false),
      level3: new UntypedFormControl(false),
      level4: new UntypedFormControl(false),
      // level5: new UntypedFormControl(false),
    }),
  });

  onTalentsUpdate(postData: CharacterTalents) {

  }

  checkInsightLevels() {
    if (this.characterTalents.get(['hunt', 'level1'])?.value === true) {
      this.insightNumber + 1
    }
  }



  ngOnInit(): void {
    // this.characterTalents.valueChanges
    //   .pipe(
    //     startWith(null),
    //     pairwise()
    //   )
    //   .subscribe(([prev, next]) => {
    //     console.log('Previous value:', prev);
    //     console.log('Current value:', next);
    //     // Compare and react to changes
    //     if (next && this.characterTalents.get(['hunt', 'level1'])?.value === true) {
    //       this.insightNumber + 1
    //     }
    //   });

    // this.characterTalents.get(['hunt', 'level1'])?.valueChanges.subscribe(value => {
    //   if (value === true) {
    //     this.insightNumber = this.insightNumber + 1;
    //   } else {
    //     this.insightNumber = 0;
    //   }

    //   // Perform other actions based on the new value
    // });

  }

  ngAfterViewInit(): void {
    console.log(this.data)

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log(this.data[0].hunt)
    if (this.data.length >= 1) {
      this.characterTalents.patchValue({
        hunt: ({ level1: this.data[0].hunt[0] }),


      })
    }
  }

}
