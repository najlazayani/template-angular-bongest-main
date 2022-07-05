import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { InformationsService } from 'src/app/services/informations.service';
import { TaxeService } from 'src/app/services/taxe.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { Taxe } from 'src/app/model/taxe';

@Component({
  selector: 'app-ajout-taxe',
  templateUrl: './ajout-taxe.component.html',
  styleUrls: ['./ajout-taxe.component.scss']
})
export class AjoutTaxeComponent implements OnInit {
  taxeFormGroup: FormGroup;
  //lienAjoute = "/transporteurs/newTransporteur"
  objectKeys = Object.keys;

  ngOnChanges() {


  }
   request  = new Taxe()

   taxe  = new Taxe()

  erreurTaxe = {
    taux: "",
  }
  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private taxeService : TaxeService,
    private fnctModel:FnctModelService) { }

  ngOnInit(): void {
  }
  isLoading = false
  ajoutTaxe() {
    if (!this.fnctModel.controleInput(this.erreurTaxe, this.taxe)) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.taxe) {
      this.request[key] = this.taxe[key]
    }
    //this.request.societeRacine = this.informationGenerale.idSocieteCurrent
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.taxeService.create(this.taxe, this.request)
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
    for (let key in this.erreurTaxe) {
      this.taxe[key] = ""
    }
  }
}
