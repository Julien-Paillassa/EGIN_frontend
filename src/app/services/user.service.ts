import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUserInfos(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/users/${id}}`);
  }
}
