import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InformationsService } from "./informations.service";

@Injectable({
  providedIn: 'root'
})
export class FamilleProduitService {
  host = this.informationGenerale.baseUrl + "/FamilleProduits/"
  currentID;


  constructor(private http: HttpClient,
    private informationGenerale: InformationsService) {
  }
  getAll(request): Observable<any> {
    return this.http.post(this.host + "listFamilleProduit", request);
  }
  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteFamilleProduit" }/${id}`, {});
  }
  parametre(id): Observable<any> {
    return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
  }
  get(id): Observable<any> {
    console.log("test id service"+id);
    return this.http.get(`${this.host + "getById"}/${id}`);
  }
  create(familleProduit,request): Observable<any> {
    return this.http.post(this.host + "newFamilleProduit", request);
  }
  update(id, familleProduit,request): Observable<any> {

    return this.http.post(`${this.host + "modifierFamilleProduit"}/${id}`, familleProduit);

  }
}
