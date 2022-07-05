import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TypeCompteur } from '../model/typeCompteur';
import { InformationsService } from './informations.service';

@Injectable({
  providedIn: 'root'
})
export class TypeCompteurService {
  host = this.informationGenerale.baseUrl + "/typeCompteurs/"
  private typeCompteurs : TypeCompteur[]=[];
  private typeCompteurs$ = new Subject<TypeCompteur[]>()
  readonly url = "http://localhost:4000/typeDepartements/images"


  constructor(private http: HttpClient,

    private informationGenerale: InformationsService) {
  }
  currentID;

getAll(request): Observable<any> {
  return this.http.post(this.host + "listTypeCompteurs", request);

  }

getTypeCompteurs(){
  this.http.get<{typeCompteurs:TypeCompteur[]}>(this.url).pipe(
    map((typeCompteurData)=>{
      return typeCompteurData.typeCompteurs;
    })
  ).subscribe((typeCompteurs)=>{
    this.typeCompteurs = typeCompteurs;
    this.typeCompteurs$.next(this.typeCompteurs)
  });

}

getTypeCompteursStream(){
  return this.typeCompteurs$.asObservable();
}


get(id): Observable<any> {
  console.log("test id service"+id);
  return this.http.get(`${this.host + "getById"}/${id}`);
}

uploadImage(image: File): Observable<any> {
  const formData = new FormData();

  formData.append('myFiles', image);

  return this.http.post(this.informationGenerale.baseUrl+'/typeCompteurs/images', formData);
}

create(typeCompteur,request): Observable<any> {
  return this.http.post(this.host + "newTypeCompteur", request);
}


update(id, typeCompteur,request): Observable<any> {

  return this.http.post(`${this.host + "modifierTypeCompteur"}/${id}`, typeCompteur);

}

delete(id): Observable<any> {
  return this.http.post(`${this.host+ "deleteTypeCompteur" }/${id}`, {});
}

parametre(id): Observable<any> {
  return this.http.get(`${this.host+ "getAllParametres"}/${id}`);
}
}
