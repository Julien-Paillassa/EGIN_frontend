import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Spot } from '../spot/spot';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private httpClient: HttpClient) { }

  getAllSpots(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/spots`);
  }

  getSpotById(id: Number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/spots/${id}`);
  }

  addSpot(spot: Spot): Observable<Spot[]> {
    return this.httpClient.post<Spot[]>(`${environment.apiUrl}/spots`, spot);
  }

  updateSpot(spot: Spot, id: any): Observable<Spot[]> {
    return this.httpClient.put<Spot[]>(`${environment.apiUrl}/spots/${id}`, spot);
  }

  deleteSpot(id: Number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${environment.apiUrl}/spots/${id}`);
  }
}
