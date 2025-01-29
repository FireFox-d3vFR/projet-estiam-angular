import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          const token = this.generateToken();
          localStorage.setItem(this.tokenKey, token);
          return true;
        }
          return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  isAdmin(): boolean {
    // For simplicity, assume that if a user is logged in, they are an admin
    return this.isLoggedIn();
  }

  private generateToken(): string {
    return Math.random().toString(36).substr(2);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
