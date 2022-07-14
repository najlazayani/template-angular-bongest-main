import { ReadVarExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeDepartement } from 'src/app/model/typeDepartement';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { TypeDepartementService } from 'src/app/services/type-departement.service';

@Component({
  selector: 'app-modifier-type-departement',
  templateUrl: './modifier-type-departement.component.html',
  styleUrls: ['./modifier-type-departement.component.scss']
})
export class ModifierTypeDepartementComponent implements OnInit {
 typeDepartementFormGroup:FormGroup;
 objectKeys = Object.keys;
 idT = this.typeDepartementService.currentID;



  @Input() id = ""
  request = new TypeDepartement()
    typeDepartement = new TypeDepartement()
    erreurTypeDepartement = {
      libelle: "",
    }
    isLoading = false
  typeDepartId;
  typeDepartements = []
  private routeSub: Subscription;


  constructor(private typeDepartementService : TypeDepartementService,
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
   ) { }

  ngOnInit(): void {

    this.getTypeDepartement();

  }
  getTypeDepartement() {
    //console.log("getTypeDepartementTest"+this.id);
    this.isLoading = true
    this.typeDepartementService.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {
            this.request = response.resultat
          for (let key in this.typeDepartement) {
            this.typeDepartement[key] = this.request[key]
          }
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

      this.getTypeDepartement()
    }


  }
  controleInputs() {
    //reset Formulaire
    for (let key in this.erreurTypeDepartement) {
      this.erreurTypeDepartement[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }var isValid = true
    //validation
    if (this.typeDepartement.libelle == "") {
     document.getElementById("libelle").classList.add("border-erreur")

     this.erreurTypeDepartement.libelle = "Veuillez remplir ce champ"
     isValid = false
   }
   console.log(this.typeDepartements);
   if (this.typeDepartement.libelle != "" && this.typeDepartements.filter(x => x.libelle == this.typeDepartement.libelle).length > 0) {
    document.getElementById("libelle").classList.add("border-erreur")

    this.erreurTypeDepartement.libelle = "existe déja"
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
    this.typeDepartement.imagePath = imagePath
    console.log(this.typeDepartId);
    this.typeDepartementService.update(this.id, this.typeDepartement, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {

            this.notificationToast.showSuccess("Votre type de departement est bien modifiée !")
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
        //this.typeDepartementFormGroup.patchValue({file :reader.result})

      }
              //this.typeDepartementFormGroup.patchValue({file :reader.result})

      reader.readAsDataURL(file);
    }
    this.file = file
  }
  uploadImage(){
    this.isLoading = true
    this.typeDepartementService.uploadImage(this.file)
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

  this.typeDepartementService.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.typeDepartements = resultat.typeDepartements.filter(x=>x.id != this.id)
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }


}
