import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FamilleProduit } from 'src/app/model/familleProduit';
import { FamilleProduitService } from 'src/app/services/famille-produit.service';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-modifier-famille-produit',
  templateUrl: './modifier-famille-produit.component.html',
  styleUrls: ['./modifier-famille-produit.component.scss']
})
export class ModifierFamilleProduitComponent implements OnInit {
  objectKeys = Object.keys;
  idT = this.familleProduitService.currentID;

 // idT = this.familleProduitService.currentID;
  @Input() id = ""
  request = new FamilleProduit()
  familleProduit = new FamilleProduit()
  erreurFamilleProduit = {
    libelle: "",
    prefixe:""
  }
  isLoading = false
  transporId;
  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {
      this.getFamilleProduit()
    }


  }
  constructor(public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private familleProduitService:FamilleProduitService) { }
    private routeSub: Subscription;

  ngOnInit(): void {

    this.getFamilleProduit();
  }
  getFamilleProduit() {
    //console.log("getFamilleProduitTest"+id);
    this.isLoading = true
    this.familleProduitService.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {
            this.request = response.resultat
          for (let key in this.familleProduit) {
            this.familleProduit[key] = this.request[key]
          }
          }
          this.getAllParametres()
        },
        error => {
          this.isLoading = false
          alert("Désole, ilya un problème de connexion internet")
        });
  }
  familleProduits =[];
  controleInputs() {
    //reset Formulaire
    for (let key in this.erreurFamilleProduit) {
      this.erreurFamilleProduit[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }var isValid = true
    //validation
    if (this.familleProduit.libelle == "") {
     document.getElementById("libelle").classList.add("border-erreur")

     this.erreurFamilleProduit.libelle = "Veuillez remplir ce champ"
     isValid = false
   }
   console.log(this.familleProduits);
   if (this.familleProduit.libelle != "" && this.familleProduits.filter(x => x.libelle == this.familleProduit.libelle).length > 0) {
    document.getElementById("libelle").classList.add("border-erreur")

    this.erreurFamilleProduit.libelle = "existe déja"
    isValid = false
  }



    return isValid
  }

  modifierfamilleProduit() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    console.log(this.transporId);
    this.familleProduitService.update(this.id, this.familleProduit, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {
           // this.closeModifierTransporteur()
            this.notificationToast.showSuccess("Votre famille produit est bien modifiée !")
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
  getAllParametres() {
    this.isLoading = true

  this.familleProduitService.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.familleProduits = resultat.familleProduits.filter(x=>x.id != this.id)
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }

}
