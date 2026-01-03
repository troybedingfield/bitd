import { Component, OnInit, inject } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from '../../supabase.service';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { LoadingspinnerComponent } from '../../shared/components/loadingspinner/loadingspinner.component';

@Component({
  selector: 'app-characters',
  imports: [CharacterCardComponent, LoadingspinnerComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  private supabaseService = inject(SupabaseService);

  items: any[] = [];
  currentUser: User | null = null;
  loading = true;

  async ngOnInit() {
    try {
      this.items = await this.supabaseService.getItems('character');
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading = false;
    }
  }
}
