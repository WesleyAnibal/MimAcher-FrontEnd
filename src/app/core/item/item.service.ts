import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  cadatrarItem(item: any){
    return this.http.post<any>(`${environment.apiBaseUrl}/api/item`,item);
  }

  getitens(){
    return this.http.get<any[]>(`${environment.apiBaseUrl}/api/item`);
  }
}
