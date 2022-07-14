import { ReadVarExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeEquipement } from 'src/app/model/typeequipement.model';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { TypeEquipementService } from 'src/app/services/type-equipement-service/type-equipement.service';

@Component({
  selector: 'app-modifier-typeequipement',
  templateUrl: './modifier-typeequipement.component.html',
  styleUrls: ['./modifier-typeequipement.component.scss']
})
export class ModifierTypeequipementComponent implements OnInit {
 typeEquipementFormGroup:FormGroup;
 objectKeys = Object.keys;
 idT = this.typeEquipementService.currentID;



  @Input() id = ""
  request = new TypeEquipement()
    typeEquipement = new TypeEquipement()
    erreurTypeEquipement = {
      libelle: "",
      pour:"",
      prefixe:"",
    }
    isLoading = false
  typeDepartId;
  typeEquipements = []
  private routeSub: Subscription;


  constructor(private typeEquipementService : TypeEquipementService,
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
   ) { }

  ngOnInit(): void {

    this.getTypeEquipement();

  }
  getTypeEquipement() {
    //console.log("getTypeDepartementTest"+this.id);
    this.isLoading = true
    console.log(this.id)
    this.typeEquipementService.get(this.id)

      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {
            this.request = response.resultat

          // for (let key in this.typeEquipement) {
            this.typeEquipement = this.request
          //   console.log("test")
           
          console.log(this.typeEquipement)
          }
          this.getAllParametres()
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {

      this.getTypeEquipement()
    }


  }
  controleInputs() {
    //reset Formulaire
    for (let key in this.erreurTypeEquipement) {
      this.erreurTypeEquipement[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }var isValid = true
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
  modifierTypeDepartement(imagePath) {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.typeEquipement.imagePath = imagePath
    console.log(this.typeDepartId);
    this.typeEquipementService.update(this.id, this.typeEquipement, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {

            this.notificationToast.showSuccess("Votre type d'equipement est bien modifiée !")
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

  file;
  imageData : string
  onFileSelect(event:Event){
    console.log("file selected")
    var file = (event.target as HTMLInputElement).files[0];
    //this.typeDepartementFormGroup.patchValue({image : file});
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
  uploadImage(){
    this.isLoading = true
    this.typeEquipementService.uploadImage(this.file)
    .subscribe(
      res => {
        this.isLoading = false
        var imagePath = res[0]
        this.modifierTypeDepartement(imagePath)
        console.log(res)
      },err => {
        this.isLoading = false
        console.log(err)
      })
  }
  getAllParametres() {
    this.isLoading = true

  this.typeEquipementService.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.typeEquipements = resultat.typeEquipements.filter(x=>x.id != this.id)
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }


}