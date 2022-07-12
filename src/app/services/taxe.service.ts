import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InformationsService } from "./informations.service";

@Injectable({
  providedIn: 'root'
})
export class TaxeService {
  host = this.informationGenerale.baseUrl + "/taxe/"
  currentID;


  constructor(private http: HttpClient,
    private informationGenerale: InformationsService) {
  }
  getAll(request): Observable<any> {
    return this.http.post(this.host + "listTaxe", request);
  }
  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteTaxe" }/${id}`, {});
  }
  parametre(): Observable<any> {
    return this.http.get(`${this.host+ "getAllParametres"}`);
  }
  get(id): Observable<any> {
    console.log("test id service"+id);
    return this.http.get(`${this.host + "getById"}/${id}`);
  }
  create(taxe,request): Observable<any> {
    return this.http.post(this.host + "newTaxe", request);
  }
  update(id, taxe,request): Observable<any> {

    return this.http.post(`${this.host + "modifierTaxe"}/${id}`, taxe);

  }
}
