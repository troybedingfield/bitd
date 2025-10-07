import { Component, OnInit } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../../supabase.service';
import { CharacterCardComponent } from "../character-card/character-card.component";


@Component({
  selector: 'app-characters',
  imports: [CharacterCardComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  items: any[] = [];
  currentUser: User | null = null;

  constructor(private supabaseService: SupabaseService) { }

  async ngOnInit() {
    try {
      this.items = await this.supabaseService.getItems('character');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
