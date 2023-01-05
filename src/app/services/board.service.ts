import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Board } from '../board/board';

@Injectable({
  providedIn: 'root'
})

export class BoardService {

  constructor(private httpClient: HttpClient) { }

  getAllBoards(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/boards`);
  }

  getBoardById(id: Number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/boards/${id}`);
  }

  addBoard(board: Board): Observable<Board[]> {
    return this.httpClient.post<Board[]>(`${environment.apiUrl}/boards`, board);
  }

  updateBoard(board: Board, id: Number): Observable<Board[]> {
    console.log(board)
    console.log(id)
    return this.httpClient.put<Board[]>(`${environment.apiUrl}/boards/10`, board);
  }

  deleteBoard(id: Number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${environment.apiUrl}/boards/${id}`);
  }

}