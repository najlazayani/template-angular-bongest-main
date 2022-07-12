import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TypeEquipement } from 'src/app/model/typeequipement.model';
import { InformationsService } from '../informations.service';

@Injectable({
  providedIn: 'root'
})
export class TypeEquipementService {
  host = this.informationGenerale.baseUrl + "/typeequipement/"
  private typeEquipements : TypeEquipement[]=[];
  private typeEquipements$ = new Subject<TypeEquipement[]>()
  readonly url = "http://localhost:4000/typeDepartements/images"


  constructor(private http: HttpClient,

    private informationGenerale: InformationsService) {
  }
  currentID;

getAll(request): Observable<any> {
  return this.http.post(this.host + "listTypeEquipements", request);

  }

getTypeEquipements(){
  this.http.get<{typeEquipements:TypeEquipement[]}>(this.url).pipe(
    map((typeEquipementData)=>{
      return typeEquipementData.typeEquipements;
    })
  ).subscribe((typeEquipements)=>{
    this.typeEquipements = typeEquipements;
    this.typeEquipements$.next(this.typeEquipements)
  });

}

getTypeEquipementsStream(){
  return this.typeEquipements$.asObservable();
}


get(id): Observable<any> {
  console.log("test id service"+id);

  return this.http.get(`${this.host + "getById"}/${id}`);
}

uploadImage(image: File): Observable<any> {
  const formData = new FormData();

  formData.append('myFiles', image);

  return this.http.post(this.informationGenerale.baseUrl+'/typeEquipements/images', formData);
}

create(typeEquipement,request): Observable<any> {
  return this.http.post(this.host + "newTypeEquipement", request);
}


update(id, typeEquipement,request): Observable<any> {

  return this.http.post(`${this.host + "modifierTypeEquipement"}/${id}`, typeEquipement);

}

delete(id): Observable<any> {
  return this.http.post(`${this.host+ "deleteTypeEquipement" }/${id}`, {});
}

parametre(): Observable<any> {
  return this.http.get(`${this.host+ "getAllParametres"}`);
}
}