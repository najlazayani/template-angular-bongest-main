import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationsService } from '../informations.service';

@Injectable({
  providedIn: 'root'
})
export class MouvementStockService {
  host = this.informationGenerale.baseUrl + "/mouvementStocks/"
 
  constructor(private http: HttpClient,
    private informationGenerale: InformationsService) {
  }

  getAll(request): Observable<any> {
    return this.http.post(this.host + "listMouvementStocks", request);
  }

  get(id): Observable<any> {
    return this.http.get(`${this.host + "getById"}/${id}`);
  }

  create(request): Observable<any> {
    return this.http.post(this.host + "newMouvementStock", request);
  }

  update(id, request): Observable<any> {
    return this.http.post(`${this.host + "modifierMouvementStock"}/${id}`, request);
  }

  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteMouvementStock" }/${id}`, {});
  }

  parametre(id): Observable<any> {
    return this.http.get(`${this.host + "getAllParametres"}/${id}`);
  }

  rappelStock(request): Observable<any> {
    return this.http.post(this.host + "rappelStock", request);
  }

  valeurStock(request): Observable<any> {
    return this.http.post(this.host + "valeurStock", request);
  }
}
