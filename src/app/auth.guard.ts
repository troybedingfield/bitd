import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private supabase: SupabaseClient;

  constructor(private router: Router) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async canActivate(): Promise<boolean> {
    const { data: { session } } = await this.supabase.auth.getSession();
    if (session) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}