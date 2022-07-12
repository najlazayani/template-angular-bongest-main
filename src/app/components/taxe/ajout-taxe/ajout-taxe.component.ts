import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { InformationsService } from 'src/app/services/informations.service';
import { TaxeService } from 'src/app/services/taxe.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { Taxe } from 'src/app/model/taxe';
import { ListTaxeComponent } from '../list-taxe/list-taxe.component';
@Component({
  selector: 'app-ajout-taxe',
  templateUrl: './ajout-taxe.component.html',
  styleUrls: ['./ajout-taxe.component.scss']
})
export class AjoutTaxeComponent implements OnInit {
  taxeFormGroup: FormGroup;
  //lienAjoute = "/transporteurs/newTransporteur"
  objectKeys = Object.keys;
taxes = [];
getAllParametres() {
  this.isLoading = true

this.taxeService.parametre()
    .subscribe(
      res => {
        this.isLoading = false
        let resultat: any = res
        if (resultat.status) {
          this.taxes = resultat.taxes
        }
      },
      error => {
        this.isLoading = false
        alert("Désole, il y a un problème de connexion internet")
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let key in this.erreurTaxe) {
      this.erreurTaxe[key] = ""
      if(document.getElementById(key) != null){
         document.getElementById(key).classList.remove("border-erreur")
      }
    }

    for (let key in this.taxe) {
      this.taxe[key] = ""
    }

  }
   request  = new Taxe()

   taxe  = new Taxe()

  erreurTaxe = {
    taux: "",
  }
  constructor(private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private taxeService : TaxeService,
    private fnctModel:FnctModelService,
    private list:ListTaxeComponent) { }

  ngOnInit(): void {
    this.getAllParametres()
  }
  isLoading = false
  ajoutTaxe() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Vérifier le taux  !")
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
            this.notificationToast.showSuccess("Votre taxe est bien enregistrée !")
            this.list.getTaxes();
          }
        },
        error => {
          this.isLoading = false
          alert("Désolé, il y a un problème de connexion internet")
        });
  }
  reseteFormulaire() {
    for (let key in this.erreurTaxe) {
      this.taxe[key] = ""
    }
  }

  controleInputs() {

    var isValid = true
    //validation

   if (this.taxe.taux != 0 && this.taxes.filter(x => x.taux == this.taxe.taux).length > 0) {
    document.getElementById("taux").classList.add("border-erreur")

    this.erreurTaxe.taux = "existe déja"
    isValid = false
  }



    return isValid
  }



}
