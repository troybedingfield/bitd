import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bitd';

  userSubscription: Subscription | undefined;

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.userSubscription = this.supabaseService.user$.subscribe((user) => {
      // console.log('Current user:', user);
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
