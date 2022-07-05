import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationsService } from '../informations.service';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {
  host = this.informationGenerale.baseUrl + "/parametres/"

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
    return this.http.post(this.host + "listParametre", request);
  }

  get(id): Observable<any> {
    console.log("test id service"+id);
    return this.http.get(`${this.host + "getById"}/${id}`);
  }

  create(parametre,request): Observable<any> {
    return this.http.post(this.host + "newParametre", request);
  }


  update(id, parametre,request): Observable<any> {
    console.log(parametre);
    console.log("id:"+id);
    console.log("test update");
    console.log(this.host+"modifierParametre"+id);
    console.log("request",request);
    return this.http.post(`${this.host + "modifierParametre"}/${id}`, parametre);

  }

  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteParametre" }/${id}`, {});
  }

  parametre(id): Observable<any> {
    return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
  }
}
