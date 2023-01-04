import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private readonly httpClient: HttpClient) {}


  getBoards(): Observable<any[]> {
    //return this.httpClient.get<any[]>(`${environment.apiUrl}/boards`);
    return this.httpClient.get<any[]>(`http://localhost:8000/apip/boards`);
  }

}