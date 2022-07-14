import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InformationsService } from "./informations.service";

@Injectable({
  providedIn: 'root'
})
export class TypePlatService {
  host = this.informationGenerale.baseUrl + "/TypePlats/"
  currentID;


  constructor(private http: HttpClient,
    private informationGenerale: InformationsService) {
  }
  getAll(request): Observable<any> {
    return this.http.post(this.host + "listTypePlat", request);
  }
  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteTypePlat" }/${id}`, {});
  }
  parametre(): Observable<any> {
    return this.http.get(`${this.host+ "getAllParametres"}`);
  }
  get(id): Observable<any> {

    return this.http.get(`${this.host + "getById"}/${id}`);
  }
  create(typePlat,request): Observable<any> {
    return this.http.post(this.host + "newTypePlat", request);
  }
  update(id, typePlat,request): Observable<any> {

    return this.http.post(`${this.host + "modifierTaxe"}/${id}`, typePlat);

  }
}
