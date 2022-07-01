import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TypeDepartement } from '../model/typeDepartement';
import { InformationsService } from './informations.service';

@Injectable({
  providedIn: 'root'
})
export class TypeDepartementService {
  host = this.informationGenerale.baseUrl + "/typeDepartements/"
  private typeDepartements : TypeDepartement[]=[];
  private typeDepartements$ = new Subject<TypeDepartement[]>()
  readonly url = "http://localhost:4000/typeDepartements/images"


  constructor(private http: HttpClient,

    private informationGenerale: InformationsService) {
  }
  currentID;

getAll(request): Observable<any> {
  return this.http.post(this.host + "listTypeDepartements", request);

  }

getTypeDepartements(){
  this.http.get<{typeDepartements:TypeDepartement[]}>(this.url).pipe(
    map((typeDepartementData)=>{
      return typeDepartementData.typeDepartements;
    })
  ).subscribe((typeDepartements)=>{
    this.typeDepartements = typeDepartements;
    this.typeDepartements$.next(this.typeDepartements)
  });

}

getTypeDepartementsStream(){
  return this.typeDepartements$.asObservable();
}


get(id): Observable<any> {
  console.log("test id service"+id);
  return this.http.get(`${this.host + "getById"}/${id}`);
}

uploadImage(image: File): Observable<any> {
  const formData = new FormData();

  formData.append('myFiles', image);

  return this.http.post(this.informationGenerale.baseUrl+'/typeDepartements/images', formData);
}

create(typeDepartement,request): Observable<any> {
  return this.http.post(this.host + "newTypeDepartement", request);
}


update(id, typeDepartement,request): Observable<any> {

  return this.http.post(`${this.host + "modifierTypeDepartement"}/${id}`, typeDepartement);

}

delete(id): Observable<any> {
  return this.http.post(`${this.host+ "deleteTypeDepartement" }/${id}`, {});
}

parametre(id): Observable<any> {
  return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
}
}
