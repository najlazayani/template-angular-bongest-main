import { Component, OnInit } from '@angular/core';
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

  ngOnChanges() {


  }
  request  = new FamilleProduit()

  familleProduit  = new FamilleProduit()

 erreurFamilleProduit = {
   libelle: "",
   prefixe:""
 }
 isLoading = false

  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private familleProduitService : FamilleProduitService,
    private fnctModel:FnctModelService) { }

  ngOnInit(): void {
  }
  ajoutFamilleProduit() {
    if (!this.fnctModel.controleInput(this.erreurFamilleProduit, this.familleProduit)) {
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
            this.notificationToast.showSuccess("Votre transporteur est bien enregistrée !")
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
}
