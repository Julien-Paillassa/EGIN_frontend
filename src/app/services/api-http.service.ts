import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Board } from './board.service';


@Injectable({
  providedIn: 'root'
})


export class ApiHttpService {

  constructor(private readonly httpClient: HttpClient) {}


  getAllBoards(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/boards`);
  }

  getBoardById(id: Number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/boards/${id}`);
  }

  addBoard(board: Board): Observable<any> {
    return this.httpClient.post<any[]>(`${environment.apiUrl}/boards`, board)
  }

}