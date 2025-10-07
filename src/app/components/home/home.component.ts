import { Component, inject } from '@angular/core';
import { TestComponent } from '../../components/test/test.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [
    TestComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private router: Router) {

  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
