import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login_check`, { username, password })
         .pipe(
             map(response => {
                 // login successful if there's a jwt token in the response
                 if (response) {
                     localStorage.setItem('jwt', JSON.stringify(response));
                 }
             })
         );
 }
}
