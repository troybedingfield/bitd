import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CharacterTalents, hunt, study } from './character-talents.model';
import { Subscription, startWith, pairwise } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../../../supabase.service';

@Component({
  selector: 'app-character-talents',
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './character-talents.component.html',
  styleUrl: './character-talents.component.scss'
})
export class CharacterTalentsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  userId: string | null = null;
  @Input() charId: any;
  @Input() data: any[] = [];
  @Input() user: any;
  editMode: boolean = false;

  loadedTalents: CharacterTalents[] = [];
  subscription: Subscription = new Subscription;

  id!: number;
  isFetching: boolean = false;
  insightNumber: number = 0;
  prowessNumber: number = 0;
  resolveNumber: number = 0;


  huntBoolean: boolean[] = []
  studyBoolean: boolean[] = []
  surveyBoolean: boolean[] = []
  tinkerBoolean: boolean[] = []
  finesseBoolean: boolean[] = []
  prowlBoolean: boolean[] = []
  skirmishBoolean: boolean[] = []
  wreckBoolean: boolean[] = []
  attuneBoolean: boolean[] = []
  commandBoolean: boolean[] = []
  consortBoolean: boolean[] = []
  swayBoolean: boolean[] = []

  constructor(private supabaseService: SupabaseService) { }

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

  async onTalentsUpdate(postData: any, char_id: number, user: any) {
    const hunt = [
      postData.hunt.level1.valueOf(),
      postData.hunt.level2.valueOf(),
      postData.hunt.level3.valueOf(),
      postData.hunt.level4.valueOf(),

    ]
    const study = [
      postData.study.level1.valueOf(),
      postData.study.level2.valueOf(),
      postData.study.level3.valueOf(),
      postData.study.level4.valueOf(),
    ]
    const survey = [
      postData.survey.level1.valueOf(),
      postData.survey.level2.valueOf(),
      postData.survey.level3.valueOf(),
      postData.survey.level4.valueOf(),
    ]
    const tinker = [
      postData.tinker.level1.valueOf(),
      postData.tinker.level2.valueOf(),
      postData.tinker.level3.valueOf(),
      postData.tinker.level4.valueOf(),
    ]
    const finesse = [
      postData.finesse.level1.valueOf(),
      postData.finesse.level2.valueOf(),
      postData.finesse.level3.valueOf(),
      postData.finesse.level4.valueOf(),
    ]
    const prowl = [
      postData.prowl.level1.valueOf(),
      postData.prowl.level2.valueOf(),
      postData.prowl.level3.valueOf(),
      postData.prowl.level4.valueOf(),
    ]
    const skirmish = [
      postData.skirmish.level1.valueOf(),
      postData.skirmish.level2.valueOf(),
      postData.skirmish.level3.valueOf(),
      postData.skirmish.level4.valueOf(),
    ]
    const wreck = [
      postData.wreck.level1.valueOf(),
      postData.wreck.level2.valueOf(),
      postData.wreck.level3.valueOf(),
      postData.wreck.level4.valueOf(),
    ]
    const attune = [
      postData.attune.level1.valueOf(),
      postData.attune.level2.valueOf(),
      postData.attune.level3.valueOf(),
      postData.attune.level4.valueOf(),
    ]
    const command = [
      postData.command.level1.valueOf(),
      postData.command.level2.valueOf(),
      postData.command.level3.valueOf(),
      postData.command.level4.valueOf(),
    ]
    const consort = [
      postData.consort.level1.valueOf(),
      postData.consort.level2.valueOf(),
      postData.consort.level3.valueOf(),
      postData.consort.level4.valueOf(),
    ]
    const sway = [
      postData.sway.level1.valueOf(),
      postData.sway.level2.valueOf(),
      postData.sway.level3.valueOf(),
      postData.sway.level4.valueOf(),
    ]

    const formData = {
      char_id,
      hunt,
      study,
      survey,
      tinker,
      finesse,
      prowl,
      skirmish,
      wreck,
      attune,
      command,
      consort,
      sway
    }

    //   console.log(hunt);
    // console.log(char_id);
    // console.log(user);

    try {
      await this.supabaseService.updateCharacterTalents(formData, char_id, user),

        await this.fetchData();

    } catch (error) {
      console.log(error)
    }
  }


  async fetchData() {
    try {
      const [talentData] = await Promise.all([
        this.supabaseService.getItemsByCharIdAndUser('talents', this.charId, this.user),
      ]);
      this.data = talentData;
      this.insightNumber = 0;
      this.prowessNumber = 0;
      this.resolveNumber = 0;
    } catch (error) {
      console.error('Error fetching data with Promise.all:', error);
    } finally {
      this.checkInsightLevels()
      this.checkProwessLevels()
      this.checkResolveLevels()
      this.editMode = !this.editMode;
    }
  }

  checkInsightLevels() {

    const insightArray = [this.data[0].hunt[0], this.data[0].study[0], this.data[0].survey[0], this.data[0].tinker[0]]
    for (const item of insightArray) {
      if (item === true)
        this.insightNumber = this.insightNumber + 1
    }

  }
  checkProwessLevels() {

    const prowessArray = [this.data[0].finesse[0], this.data[0].prowl[0], this.data[0].skirmish[0], this.data[0].wreck[0]]
    for (const item of prowessArray) {
      if (item === true)
        this.prowessNumber = this.prowessNumber + 1
    }

  }
  checkResolveLevels() {

    const resolveArray = [this.data[0].attune[0], this.data[0].command[0], this.data[0].consort[0], this.data[0].sway[0]]
    for (const item of resolveArray) {
      if (item === true)
        this.resolveNumber = this.resolveNumber + 1
    }

  }


  editForm() {
    this.editMode = !this.editMode;

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

    if (this.data[0]) {

      this.huntBoolean = this.data[0]!.hunt.filter((value: boolean) => value === true)
      this.studyBoolean = this.data[0]!.study.filter((value: boolean) => value === true)
      this.surveyBoolean = this.data[0]!.survey.filter((value: boolean) => value === true)
      this.tinkerBoolean = this.data[0]!.tinker.filter((value: boolean) => value === true)
      this.finesseBoolean = this.data[0]!.finesse.filter((value: boolean) => value === true)
      this.prowlBoolean = this.data[0]!.prowl.filter((value: boolean) => value === true)
      this.skirmishBoolean = this.data[0]!.skirmish.filter((value: boolean) => value === true)
      this.wreckBoolean = this.data[0]!.wreck.filter((value: boolean) => value === true)
      this.attuneBoolean = this.data[0]!.attune.filter((value: boolean) => value === true)
      this.commandBoolean = this.data[0]!.command.filter((value: boolean) => value === true)
      this.consortBoolean = this.data[0]!.consort.filter((value: boolean) => value === true)
      this.swayBoolean = this.data[0]!.sway.filter((value: boolean) => value === true)

    }


    if (this.data.length >= 1) {
      this.characterTalents.patchValue({
        hunt: ({
          level1: this.data[0].hunt[0],
          level2: this.data[0].hunt[1],
          level3: this.data[0].hunt[2],
          level4: this.data[0].hunt[3],
        }),
        study: ({
          level1: this.data[0].study[0],
          level2: this.data[0].study[1],
          level3: this.data[0].study[2],
          level4: this.data[0].study[3],
        }),
        survey: ({
          level1: this.data[0].survey[0],
          level2: this.data[0].survey[1],
          level3: this.data[0].survey[2],
          level4: this.data[0].survey[3],
        }),
        tinker: ({
          level1: this.data[0].tinker[0],
          level2: this.data[0].tinker[1],
          level3: this.data[0].tinker[2],
          level4: this.data[0].tinker[3],
        }),
        finesse: ({
          level1: this.data[0].finesse[0],
          level2: this.data[0].finesse[1],
          level3: this.data[0].finesse[2],
          level4: this.data[0].finesse[3],
        }),
        prowl: ({
          level1: this.data[0].prowl[0],
          level2: this.data[0].prowl[1],
          level3: this.data[0].prowl[2],
          level4: this.data[0].prowl[3],
        }),
        skirmish: ({
          level1: this.data[0].skirmish[0],
          level2: this.data[0].skirmish[1],
          level3: this.data[0].skirmish[2],
          level4: this.data[0].skirmish[3],
        }),
        wreck: ({
          level1: this.data[0].wreck[0],
          level2: this.data[0].wreck[1],
          level3: this.data[0].wreck[2],
          level4: this.data[0].wreck[3],
        }),
        attune: ({
          level1: this.data[0].attune[0],
          level2: this.data[0].attune[1],
          level3: this.data[0].attune[2],
          level4: this.data[0].attune[3],
        }),
        command: ({
          level1: this.data[0].command[0],
          level2: this.data[0].command[1],
          level3: this.data[0].command[2],
          level4: this.data[0].command[3],
        }),
        consort: ({
          level1: this.data[0].consort[0],
          level2: this.data[0].consort[1],
          level3: this.data[0].consort[2],
          level4: this.data[0].consort[3],
        }),
        sway: ({
          level1: this.data[0].sway[0],
          level2: this.data[0].sway[1],
          level3: this.data[0].sway[2],
          level4: this.data[0].sway[3],
        }),


      })
    }

    this.checkInsightLevels()
    this.checkProwessLevels()
    this.checkResolveLevels()
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log(this.data[0].hunt)

  }

}
