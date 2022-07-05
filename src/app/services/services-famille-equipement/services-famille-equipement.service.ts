import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationsService } from '../informations.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesFamilleEquipementService {
  host = this.informationGenerale.baseUrl + "/familles/"

  constructor(private http: HttpClient,
    private informationGenerale: InformationsService) {
  }
currentID;
  // currentID(idT){
  //   let id = idT;
  //   console.log("idT"+idT);
  //   console.log("test id service current id"+id);
  //   return idT;
    //console.log("id"+id);
  //}

  getAll(request): Observable<any> {
    return this.http.post(this.host + "listFamille", request);
  }

  get(id): Observable<any> {
    console.log("test id service"+id);
    return this.http.get(`${this.host + "getById"}/${id}`);
  }

  create(famille,request): Observable<any> {
    return this.http.post(this.host + "newFamille", request);
  }


  update(id, famille,request): Observable<any> {
    console.log(famille);
    console.log("id:"+id);
    console.log("test update");
    console.log(this.host+"/modifierFamille"+id);
    console.log("request",request);
    console.log(id);
    return this.http.post(`${this.host + "modifierFamille"}/${id}`, famille);

  }

  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteFamille" }/${id}`, {});
  }

  parametre(id): Observable<any> {
    return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
  }
}
