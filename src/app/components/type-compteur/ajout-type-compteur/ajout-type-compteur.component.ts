import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeCompteur } from 'src/app/model/typeCompteur';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { TypeCompteurService } from 'src/app/services/type-compteur.service';
@Component({
  selector: 'app-ajout-type-compteur',
  templateUrl: './ajout-type-compteur.component.html',
  styleUrls: ['./ajout-type-compteur.component.scss']
})
export class AjoutTypeCompteurComponent implements OnInit {
  typeCompteurFormGroup: FormGroup;
  //lienAjoute = "/typeDepartements/newTypeDepartement"
  objectKeys = Object.keys;
  imageData : string
  ngOnChanges(changes: SimpleChanges) {
    // if(this.isOpenModalAjoutTypeDepartement == true){
      for (let key in this.erreurTypeCompteur) {
        this.erreurTypeCompteur[key] = ""
        if(document.getElementById(key) != null){
           document.getElementById(key).classList.remove("border-erreur")
        }
        for (let key in this.typeCompteur) {
          this.typeCompteur[key] = ""
        }
      }
    }
    request  = new TypeCompteur()

    typeCompteur  = new TypeCompteur()

    erreurTypeCompteur = {
      libelle: "",

    }

  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private typeCompteurService : TypeCompteurService,
    private fnctModel:FnctModelService) { }

  ngOnInit(): void {
    this.typeCompteurFormGroup= new FormGroup({
      name :new FormControl(null),
    image : new FormControl(null)});

  }
getColor(){
  var inputValue = (<HTMLInputElement>document.getElementById('couleur')).value;
console.log(inputValue);
}
file

onFileSelect(event:Event){
  console.log("file selected")
  var file = (event.target as HTMLInputElement).files[0];
  this.typeCompteurFormGroup.patchValue({image : file});
  const allowedMimeTypes = ["image/png","image/jpeg","image/jpg"];
  if (file && allowedMimeTypes.includes(file.type)){
    const reader = new FileReader();
    reader.onload = () => {
      this.imageData = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
  this.file = file
}
isLoading = false
uploadImage(){
  this.isLoading = true
  this.typeCompteurService.uploadImage(this.file)
  .subscribe(
    res => {
      this.isLoading = false
      var imagePath = res[0]
      this.ajoutTypeCompteur(imagePath)
      console.log(res)
    },err => {
      this.isLoading = false
      console.log(err)
    })
}

ajoutTypeCompteur(imagePath) {
  if (!this.fnctModel.controleInput(this.erreurTypeCompteur, this.typeCompteur)) {
    this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
    return
  }
  for (let key in this.typeCompteur) {
    this.request[key] = this.typeCompteur[key]
  }
 // this.request.societeRacine = this.informationGenerale.idSocieteCurrent
  if (this.isLoading) {
    return
  }

  this.request.imagePath = imagePath
  this.isLoading = true
  this.typeCompteurService.create(this.typeCompteur, this.request)
    .subscribe(
      res => {
        this.isLoading = false
        let resultat: any = res
        if (resultat.status) {
          console.log(resultat)
          //this.closeAjoutTypeDepartement()
          this.notificationToast.showSuccess("Votre type de compteur est bien enregistrée !")
        }
      },
      error => {
        this.isLoading = false
        alert("Désole, il y a un problème de connexion internet")
      });
}

reseteFormulaire() {
  for (let key in this.erreurTypeCompteur) {
    this.typeCompteur[key] = ""
  }
}
onSubmit(){
console.log("submit type dear")
this.typeCompteurFormGroup.reset();
this.imageData = null;

}


}
