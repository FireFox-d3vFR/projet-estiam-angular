import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private tokenKey = 'authToken';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private isAdminSubject = new BehaviorSubject<boolean>(this.isAdminRole());

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          const token = this.generateToken();
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(this.tokenKey, token);
            localStorage.setItem('isAdmin', user.role === 'admin' ? 'true' : 'false');
          }
          this.isLoggedInSubject.next(true);
          this.isAdminSubject.next(user.role === 'admin');
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => of(false))
    );
  }

  register(username: string, password: string, isAdmin: boolean): Observable<boolean> {
    const newUser = {
      username,
      password,
      role: isAdmin ? 'admin' : 'user'
    };

    return this.http.post<any>(`${this.apiUrl}/users`, newUser).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
      localStorage.removeItem('isAdmin');
    }
    this.isLoggedInSubject.next(false);
    this.isAdminSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  isAdmin(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
  }

  private hasToken(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem(this.tokenKey);
    }
    return false;
  }

  private isAdminRole(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('isAdmin') === 'true';
    }
    return false;
  }

  private generateToken(): string {
    return Math.random().toString(36).substr(2);
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
}
