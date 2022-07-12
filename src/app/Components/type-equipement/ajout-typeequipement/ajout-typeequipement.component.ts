import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TypeEquipement } from 'src/app/model/typeequipement.model';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { TypeEquipementService } from 'src/app/services/type-equipement-service/type-equipement.service';
@Component({
  selector: 'app-ajout-typeequipement',
  templateUrl: './ajout-typeequipement.component.html',
  styleUrls: ['./ajout-typeequipement.component.scss']
})
export class AjoutTypeequipementComponent implements OnInit {

  typeEquipementFormGroup: FormGroup;
  lienAjoute = "/typeEquipements/newTypeEquipement"
  objectKeys = Object.keys;


  typeEquipements = []
  getAllParametres() {
    this.isLoading = true

  this.typeEquipementService.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.typeEquipements = resultat.typeEquipements
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }


  @Output() closeModalAjoutTypeEquipement = new EventEmitter<string>();

  @Input() isPopup = false

  @Input() isOpenModalAjoutTypeEquipement = false
imageData : string
  ngOnChanges(changes: SimpleChanges) {
    if(this.isOpenModalAjoutTypeEquipement == true){
      for (let key in this.erreurTypeEquipement) {
        this.erreurTypeEquipement[key] = ""
        if(document.getElementById(key) != null){
           document.getElementById(key).classList.remove("border-erreur")
        }
      }

      for (let key in this.typeEquipement) {
        this.typeEquipement[key] = ""
      }
    }
  }

  closeAjoutTypeEquipement(){
    this.closeModalAjoutTypeEquipement.emit();
  }

  request  = new TypeEquipement()

  typeEquipement  = new TypeEquipement()

  erreurTypeEquipement = {
    libelle: "",
    imagePath: "",
    prefixe:"",
    pour :""
  }
  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private typeEquipementService : TypeEquipementService,
    private fnctModel:FnctModelService
    ) { }

  ngOnInit(): void {
    this.typeEquipementFormGroup= new FormGroup({
      name :new FormControl(null),
    image : new FormControl(null)});

    this.getAllParametres()
  }

  file

  onFileSelect(event:Event){
    console.log("file selected")
    var file = (event.target as HTMLInputElement).files[0];
    this.typeEquipementFormGroup.patchValue({image : file});
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
    this.typeEquipementService.uploadImage(this.file)
    .subscribe(
      res => {
        this.isLoading = false
        var imagePath = res[0]
        this.ajoutTypeEquipement(imagePath)
        console.log(res)
      },err => {
        this.isLoading = false
        console.log(err)
      })
  }

  controleInputs() {
    //reset Formulaire
    for (let key in this.erreurTypeEquipement) {
      this.erreurTypeEquipement[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }


    var isValid = true
    //validation
    if (this.typeEquipement.libelle == "") {
     document.getElementById("libelle").classList.add("border-erreur")

     this.erreurTypeEquipement.libelle = "Veuillez remplir ce champ"
     isValid = false
   }
console.log(this.typeEquipements);
   if (this.typeEquipement.libelle != "" && this.typeEquipements.filter(x => x.libelle == this.typeEquipement.libelle).length > 0) {
    document.getElementById("libelle").classList.add("border-erreur")

    this.erreurTypeEquipement.libelle = "existe déja"
    isValid = false
  }



    return isValid
  }

  ajoutTypeEquipement(imagePath) {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }

    for (let key in this.typeEquipement) {
      this.request[key] = this.typeEquipement[key]
    }
   // this.request.societeRacine = this.informationGenerale.idSocieteCurrent
    if (this.isLoading) {
      return
    }

    this.request.imagePath = imagePath
    this.isLoading = true
    this.typeEquipementService.create(this.typeEquipement, this.request)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            console.log(resultat)
            this.closeAjoutTypeEquipement()
            this.notificationToast.showSuccess("Votre type de departement est bien enregistrée !")
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  reseteFormulaire() {
    for (let key in this.erreurTypeEquipement) {
      this.typeEquipement[key] = ""
    }
  }
  onSubmit(){
  console.log("submit type dear")
  this.typeEquipementFormGroup.reset();
  this.imageData = null;

}



}