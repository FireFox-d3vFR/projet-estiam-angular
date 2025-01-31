import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: false,

  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  isAdmin: boolean = false;
  errorMessage: string = '';
  showRegisterForm: boolean = false;

  constructor(private authService: AuthService , private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      }
    });
  }

  register(): void {
    this.authService.register(this.username, this.password, this.isAdmin).subscribe(success => {
      if (success) {
        this.showRegisterForm = false;
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Erreur lors de la création du compte';
      }
    });
  }

  toggleRegisterForm(): void {
    this.showRegisterForm = !this.showRegisterForm;
    this.errorMessage = '';
  }
}
