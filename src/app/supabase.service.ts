// supabase.service.ts
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../environments/environment'; // Ensure this path is correct
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseClient: SupabaseClient;
  private _user = new BehaviorSubject<User | null>(null);
  public user$ = this._user.asObservable();

  constructor() {
    this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
    this.loadUser();
  }

  async loadUser() {
    const { data: { user } } = await this.supabaseClient.auth.getUser();
    this._user.next(user);
  }

  getClient() {
    return this.supabaseClient;
  }

  // Example method to fetch data
  async getItems(table: string) {
    const { data, error } = await this.supabaseClient.from(table).select('*').order('id', { ascending: true });
    if (error) {
      throw error;
    }
    return data;
  }

  // Example method to insert data
  async addItem(table: string, item: any) {
    const { data, error } = await this.supabaseClient.from(table).insert([item]);
    if (error) {
      throw error;
    }
    return data;
  }

  async signUp(email: string, password: string) {
    return await this.supabaseClient.auth.signUp({ email, password });
  }

  async signIn(email: string, password: string) {
    return await this.supabaseClient.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return await this.supabaseClient.auth.signOut();
  }

  // async getUser() {
  //   return await this.supabaseClient.auth.getUser();
  // }

  async getCurrentUser(): Promise<User | null> {
    const { data: { user } } = await this.supabaseClient.auth.getUser();
    return user;
  }

  async getItemsById(table: string, id: any) {
    const { data, error } = await this.supabaseClient.from(table).select('*').eq('id', id);
    if (error) {
      throw error;
    }
    return data;
  }

  async getItemsByIdAndUser(table: string, id: any, user: any) {
    const { data, error } = await this.supabaseClient.from(table).select('*').eq('id', id).eq('uuid', user);
    if (error) {
      throw error;
    }
    return data;
  }


  // Add more methods for other Supabase operations (e.g., update, delete, auth)
}




// import { Injectable } from '@angular/core'
// import {
//   AuthChangeEvent,
//   AuthSession,
//   createClient,
//   Session,
//   SupabaseClient,
//   User,
// } from '@supabase/supabase-js'
// import { environment } from '../environments/environment'

// export interface Profile {
//   id?: string
//   username: string
//   website: string
//   avatar_url: string
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SupabaseService {
//   private supabase: SupabaseClient
//   _session: AuthSession | null = null

//   constructor() {
//     this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
//   }

//   get session() {
//     this.supabase.auth.getSession().then(({ data }) => {
//       this._session = data.session
//     })
//     return this._session
//   }

//   profile(user: User) {
//     return this.supabase
//       .from('profiles')
//       .select(`username, website, avatar_url`)
//       .eq('id', user.id)
//       .single()
//   }

//   authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
//     return this.supabase.auth.onAuthStateChange(callback)
//   }

//   signIn(email: string) {
//     return this.supabase.auth.signInWithOtp({ email })
//   }

//   signOut() {
//     return this.supabase.auth.signOut()
//   }

//   updateProfile(profile: Profile) {
//     const update = {
//       ...profile,
//       updated_at: new Date(),
//     }

//     return this.supabase.from('profiles').upsert(update)
//   }

//   downLoadImage(path: string) {
//     return this.supabase.storage.from('avatars').download(path)
//   }

//   uploadAvatar(filePath: string, file: File) {
//     return this.supabase.storage.from('avatars').upload(filePath, file)
//   }
// }