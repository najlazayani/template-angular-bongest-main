import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationsService } from '../informations.service';

@Injectable({
  providedIn: 'root'
})
export class TransporteurService {
  host = this.informationGenerale.baseUrl + "/transporteurs/"

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
    return this.http.post(this.host + "listTransporteurs", request);
  }

  get(id): Observable<any> {
    console.log("test id service"+id);
    return this.http.get(`${this.host + "getById"}/${id}`);
  }

  create(transporteur,request): Observable<any> {
    return this.http.post(this.host + "newTransporteur", request);
  }


  update(id, transporteur,request): Observable<any> {
    console.log(transporteur);
    console.log("id:"+id);
    console.log("test update");
    console.log(this.host+"modifierTransporteur"+id);
    console.log("request",request);
    return this.http.post(`${this.host + "modifierTransporteur"}/${id}`, transporteur);

  }

  delete(id): Observable<any> {
    return this.http.post(`${this.host+ "deleteTransporteur" }/${id}`, {});
  }

  parametre(id): Observable<any> {
    return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
  }
}
