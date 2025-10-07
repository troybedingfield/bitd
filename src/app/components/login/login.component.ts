import { Component } from '@angular/core';
import { AuthComponent } from '../../auth/auth.component';

@Component({
  selector: 'app-login',
  imports: [AuthComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
