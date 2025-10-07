import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../supabase.service';
import { NgFor } from '@angular/common';
import { User } from '@supabase/supabase-js';

@Component({
  selector: 'app-supatest',
  imports: [NgFor],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit, AfterViewInit {
  items: any[] = [];
  currentUser: User | null = null;

  constructor(private supabaseService: SupabaseService) { }

  async ngOnInit() {
    try {
      this.items = await this.supabaseService.getItems('character');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    // this.currentUser = await this.supabaseService.getCurrentUser();
    // if (this.currentUser) {
    //   console.log('Current user:', this.currentUser);
    // } else {
    //   console.log('No user logged in.');
    // }
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.items.length);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log(this.items);
  }
}
