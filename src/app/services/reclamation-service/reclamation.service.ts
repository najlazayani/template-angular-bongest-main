import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationsService } from '../informations.service';@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  host = this.informationGenerale.baseUrl + "/reclamations/"


  constructor(private http: HttpClient,
    private informationGenerale: InformationsService) { }
    currentID;
    // currentID(idT){
    //   let id = idT;
    //   console.log("idT"+idT);
    //   console.log("test id service current id"+id);
    //   return idT;
      //console.log("id"+id);
    //}
  
    getAll(request): Observable<any> {
      return this.http.post(this.host + "listReclamation", request);
    }
  
    get(id): Observable<any> {
      console.log("test id service"+id);
      return this.http.get(`${this.host + "getById"}/${id}`);
    }
  
    create(reclamation,request): Observable<any> {
      return this.http.post(this.host + "newReclamation", request);
    }
  
  
    update(id, reclamation,request): Observable<any> {
      console.log(reclamation);
      console.log("id:"+id);
      console.log("test update");
      console.log(this.host+"modifierReclamation"+id);
      console.log("request",request);
      return this.http.post(`${this.host + "modifierReclamation"}/${id}`, reclamation);
  
    }
  
    delete(id): Observable<any> {
      return this.http.post(`${this.host+ "deleteReclamation" }/${id}`, {});
    }
  
    parametre(id): Observable<any> {
      return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
    }
  }
  
