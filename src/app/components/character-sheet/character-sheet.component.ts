import { AfterContentChecked, Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SupabaseService } from '../../supabase.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterDetailsComponent } from "./character-details/character-details.component";
import { CharacterTalentsComponent } from "./character-talents/character-talents.component";


@Component({
  selector: 'app-character-sheet',
  imports: [CharacterDetailsComponent, CharacterTalentsComponent],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.scss'
})
export class CharacterSheetComponent implements OnInit, AfterContentChecked, OnDestroy {
  characterInfo: any[] = []
  talent: any[] = []
  userId: string | null = null;
  user: any;
  userNew: any;
  userSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private supabaseService: SupabaseService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
    this.userSubscription = this.supabaseService.user$.subscribe((user) => {
      console.log('Current user:', user);
      this.userNew = user?.id
    });
    // try {
    //   this.characterInfo = await this.supabaseService.getItems('character');
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    // try {
    //   this.characterInfo = await this.supabaseService.getItemsById('character', this.userId);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    // try {
    //   this.characterInfo = await this.supabaseService.getItemsByIdAndUser('character', this.userId, this.userNew);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    // try {
    //   this.characterInfo = await this.supabaseService.getItemsByCharIdAndUser('character', this.userId, this.userNew);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    // try {
    //   this.talent = await this.supabaseService.getItemsByCharIdAndUser('talents', this.userId, this.userNew);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }

    try {
      const [characterData, talentData] = await Promise.all([
        this.supabaseService.getItemsByCharIdAndUser('character', this.userId, this.userNew),
        this.supabaseService.getItemsByCharIdAndUser('talents', this.userId, this.userNew),
      ]);
      this.characterInfo = characterData;
      this.talent = talentData;
    } catch (error) {
      console.error('Error fetching data with Promise.all:', error);
    } finally {
      //  this.loading = false;
    }
    // try {
    //   this.characterAttributes = await this.supabaseService.getItemsById('charAttributes', this.userId);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    // try {
    //   this.characterAttributes = await this.supabaseService.getItemsByIdAndUser('charAttributes', this.userId, this.userNew);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
    // try {
    //   this.user = await this.supabaseService.getCurrentUser();
    // } catch (error) {

    // }
  }

  async ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log(this.userSubscription)

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['characterInfo']) {
      const previousValue = changes['characterInfo'].previousValue;
      const currentValue = changes['characterInfo'].currentValue;
      console.log(`Value changed from ${previousValue} to ${currentValue}`);
      // Perform actions based on the change
    }
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
