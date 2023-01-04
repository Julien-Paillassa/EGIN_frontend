import { Injectable } from '@angular/core';
import {from, map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ApiHttpService} from "./api-http.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private route: ActivatedRoute,
    private readonly httpService: ApiHttpService,
    private httpClient: HttpClient
  ) { }

  apiGetBoard(): Observable<any[]> {
    return this.httpService.getBoards()
  }

  
}