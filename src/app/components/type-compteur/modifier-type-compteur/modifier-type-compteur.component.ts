import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeCompteur } from 'src/app/model/typeCompteur';
import { InformationsService } from 'src/app/services/informations.service';
import { TypeCompteurService } from 'src/app/services/type-compteur.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-modifier-type-compteur',
  templateUrl: './modifier-type-compteur.component.html',
  styleUrls: ['./modifier-type-compteur.component.scss']
})
export class ModifierTypeCompteurComponent implements OnInit {
  @Input() id = ""
  typeCompteurFormGroup:FormGroup;
 objectKeys = Object.keys;
 idT = this.typeCompteurService.currentID;
 request = new TypeCompteur()
    typeCompteur = new TypeCompteur()
    erreurTypeCompteur = {
      libelle: "",
      ordre:"",
      couleur:"",
    }
    isLoading = false
  typeDepartId;
  private routeSub: Subscription;

  constructor(private typeCompteurService:TypeCompteurService,

    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      const typeDeparteId = params['id'];
      console.log("test id here");
      console.log(typeDeparteId);
      this.typeDepartId = typeDeparteId;

    });
    console.log("test this.transporId");
    console.log(this.typeDepartId);
    this.getTypeCompteur(this.typeDepartId);
  }
  getTypeCompteur(id) {
    console.log("getTypeDepartementTest"+id);
    this.isLoading = true
    this.typeCompteurService.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {
            this.request = response.resultat
          for (let key in this.typeCompteur) {
            this.typeCompteur[key] = this.request[key]
          }
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, ilya un problème de connexion internet")
        });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {

      this.getTypeCompteur(this.id)
    }


  }
  controleInputs() {
    for (let key in this.erreurTypeCompteur) {
      this.erreurTypeCompteur[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    for (let key in this.erreurTypeCompteur) {
      if (this.typeCompteur[key] == "") {
        if(document.getElementById(key) != null){
          document.getElementById(key).classList.add("border-erreur")
        }
        this.erreurTypeCompteur[key] = "Veuillez remplir ce champ"
        isValid = false
      }
    }

    return isValid
  }

  modifierTypeCompteur(imagePath) {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.typeCompteur.imagePath = imagePath
    console.log(this.typeDepartId);
    this.typeCompteurService.update(this.id, this.typeCompteur, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {
           // this.closeModifierTypeDepartement()
            this.notificationToast.showSuccess("Votre type de compteur est bien modifiée !")
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
    this.typeCompteurService.uploadImage(this.file)
    .subscribe(
      res => {
        this.isLoading = false
        var imagePath = res[0]
        this.modifierTypeCompteur(imagePath)
        console.log(res)
      },err => {
        this.isLoading = false
        console.log(err)
      })
  }



}
