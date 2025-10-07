import { Component, inject } from '@angular/core'
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SupabaseService } from '../supabase.service'
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [ReactiveFormsModule, FormsModule]
})
export class AuthComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async login() {
    try {
      const { error } = await this.supabaseService.signIn(this.email, this.password);
      if (error) {
        this.errorMessage = error.message;
      } else {
        // Handle successful login, e.g., redirect to home page
        this.errorMessage = '';
        console.log('Login successful');
        this.router.navigate(['/dashboard']);
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
  // loading = false

  // signInForm = this.formBuilder.group({
  //   email: '',
  // })

  // constructor(
  //   private readonly supabase: SupabaseService,
  //   private readonly formBuilder: FormBuilder
  // ) { }

  // async onSubmit(): Promise<void> {
  //   try {
  //     this.loading = true
  //     const email = this.signInForm.value.email as string
  //     const { error } = await this.supabase.signIn(email)
  //     if (error) throw error
  //     alert('Check your email for the login link!')
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message)
  //     }
  //   } finally {
  //     this.signInForm.reset()
  //     this.loading = false
  //   }
  // }
}