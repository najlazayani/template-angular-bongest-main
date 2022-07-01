import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeDepartement } from 'src/app/model/typeDepartement';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { TypeDepartementService } from 'src/app/services/type-departement.service';
@Component({
  selector: 'app-ajout-type-departement',
  templateUrl: './ajout-type-departement.component.html',
  styleUrls: ['./ajout-type-departement.component.scss']
})
export class AjoutTypeDepartementComponent implements OnInit {

  typeDepartementFormGroup: FormGroup;
  lienAjoute = "/typeDepartements/newTypeDepartement"
  objectKeys = Object.keys;

  @Output() closeModalAjoutTypeDepartement = new EventEmitter<string>();

  @Input() isPopup = false

  @Input() isOpenModalAjoutTypeDepartement = false
imageData : string
  ngOnChanges(changes: SimpleChanges) {
    if(this.isOpenModalAjoutTypeDepartement == true){
      for (let key in this.erreurTypeDepartement) {
        this.erreurTypeDepartement[key] = ""
        if(document.getElementById(key) != null){
           document.getElementById(key).classList.remove("border-erreur")
        }
      }

      for (let key in this.typeDepartement) {
        this.typeDepartement[key] = ""
      }
    }
  }

  closeAjoutTypeDepartement(){
    this.closeModalAjoutTypeDepartement.emit();
  }

  request  = new TypeDepartement()

  typeDepartement  = new TypeDepartement()

  erreurTypeDepartement = {
    libelle: "",
  }
  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private typeDepartementService : TypeDepartementService,
    private fnctModel:FnctModelService
    ) { }

  ngOnInit(): void {
    this.typeDepartementFormGroup= new FormGroup({
      name :new FormControl(null),
    image : new FormControl(null)});
  }

  file

  onFileSelect(event:Event){
    console.log("file selected")
    var file = (event.target as HTMLInputElement).files[0];
    this.typeDepartementFormGroup.patchValue({image : file});
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
    this.typeDepartementService.uploadImage(this.file)
    .subscribe(
      res => {
        this.isLoading = false
        var imagePath = res[0]
        this.ajoutTypeDepartement(imagePath)
        console.log(res)
      },err => {
        this.isLoading = false
        console.log(err)
      })
  }

  ajoutTypeDepartement(imagePath) {
    if (!this.fnctModel.controleInput(this.erreurTypeDepartement, this.typeDepartement)) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.typeDepartement) {
      this.request[key] = this.typeDepartement[key]
    }
   // this.request.societeRacine = this.informationGenerale.idSocieteCurrent
    if (this.isLoading) {
      return
    }

    this.request.imagePath = imagePath
    this.isLoading = true
    this.typeDepartementService.create(this.typeDepartement, this.request)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            console.log(resultat)
            this.closeAjoutTypeDepartement()
            this.notificationToast.showSuccess("Votre type de departement est bien enregistrée !")
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  reseteFormulaire() {
    for (let key in this.erreurTypeDepartement) {
      this.typeDepartement[key] = ""
    }
  }
  onSubmit(){
  console.log("submit type dear")
  this.typeDepartementFormGroup.reset();
  this.imageData = null;

}



}
