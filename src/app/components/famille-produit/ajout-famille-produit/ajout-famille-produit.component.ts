import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FamilleProduit } from 'src/app/model/familleProduit';
import { FamilleProduitService } from 'src/app/services/famille-produit.service';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-ajout-famille-produit',
  templateUrl: './ajout-famille-produit.component.html',
  styleUrls: ['./ajout-famille-produit.component.scss']
})
export class AjoutFamilleProduitComponent implements OnInit {
  familleProduitFormGroup: FormGroup;
  objectKeys = Object.keys;

  ngOnChanges(changes: SimpleChanges) {
    for (let key in this.erreurFamilleProduit) {
      this.erreurFamilleProduit[key] = ""
      if(document.getElementById(key) != null){
         document.getElementById(key).classList.remove("border-erreur")
      }
    }

    for (let key in this.familleProduit) {
      this.familleProduit[key] = ""
    }


  }
  request  = new FamilleProduit()

  familleProduit  = new FamilleProduit()
  familleProduits =[]
  getAllParametres() {
    this.isLoading = true

  this.familleProduitService.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.familleProduits = resultat.familleProduits
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }

 erreurFamilleProduit = {
   libelle: "",
   prefixe:""
 }
 isLoading = false

  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private familleProduitService : FamilleProduitService,
    private fnctModel:FnctModelService
    ) { }

  ngOnInit(): void {
    this.getAllParametres()
  }

  ajoutFamilleProduit() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.familleProduit) {
      this.request[key] = this.familleProduit[key]
    }
    //this.request.societeRacine = this.informationGenerale.idSocieteCurrent
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.familleProduitService.create(this.familleProduit, this.request)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            console.log(resultat)
            //this.closeAjoutTransporteur()
            this.notificationToast.showSuccess("Votre famille de produit est bien enregistrée !")

          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }
  reseteFormulaire() {
    for (let key in this.erreurFamilleProduit) {
      this.familleProduit[key] = ""
    }
  }


  controleInputs() {
    for (let key in this.erreurFamilleProduit) {
      this.erreurFamilleProduit[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }

    var isValid = true

    if(this.familleProduit.libelle==""){
      document.getElementById("libelle").classList.add("border-erreur")
      this.erreurFamilleProduit.libelle="Veuillez remplir ce champ"
      isValid=false;
    }
    if(this.familleProduit.prefixe==""){
      document.getElementById("prefixe").classList.add("border-erreur")
      this.erreurFamilleProduit.libelle="Veuillez remplir ce champ"
      isValid=false;
    }



    //validation

   if (this.familleProduit.libelle != "" && this.familleProduits.filter(x => x.libelle == this.familleProduit.libelle).length > 0) {
    document.getElementById("libelle").classList.add("border-erreur")

    this.erreurFamilleProduit.libelle = "existe déja"
    isValid = false
  }



    return isValid
  }


}
