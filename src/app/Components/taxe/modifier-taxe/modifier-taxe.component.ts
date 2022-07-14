import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Taxe } from 'src/app/model/taxe';
import { InformationsService } from 'src/app/services/informations.service';
import { TaxeService } from 'src/app/services/taxe.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { ListTaxeComponent } from '../list-taxe/list-taxe.component';
@Component({
  selector: 'app-modifier-taxe',
  templateUrl: './modifier-taxe.component.html',
  styleUrls: ['./modifier-taxe.component.scss']
})
export class ModifierTaxeComponent implements OnInit {
  objectKeys = Object.keys;
  idT = this.taxeService.currentID;

 // idT = this.taxeService.currentID;
  @Input() id = ""
  request = new Taxe()
  taxe = new Taxe()
  taxes = []
  erreurTaxe = {
    taux: "",
  }
  isLoading = false
  transporId;
  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {
      this.getTaxe();
    }


  }
  constructor(
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private taxeService:TaxeService,
    private list : ListTaxeComponent) { }
    private routeSub: Subscription;

  ngOnInit(): void {
  this.getTaxe();



  }

  getTaxe() {

    this.isLoading = true
    this.taxeService.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {
            this.request = response.resultat
          for (let key in this.taxe) {
            this.taxe[key] = this.request[key]
          }
          }
          this.getAllParametres()
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  controleInputs() {
    //reset Formulaire
    for (let key in this.erreurTaxe) {
      this.erreurTaxe[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }var isValid = true
    //validation


   if (this.taxe.taux != 0 && this.taxes.filter(x => x.taux == this.taxe.taux).length > 0) {
    document.getElementById("taux").classList.add("border-erreur")

    this.erreurTaxe.taux = "existe déja"
    isValid = false
  }



    return isValid
  }

  modifierTaxe() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    console.log(this.transporId);
    this.taxeService.update(this.id, this.taxe, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {
           // this.closeModifierTransporteur()
            this.notificationToast.showSuccess("Votre taxe est bien modifiée !")
            //myModal.modal('hide');
            //$("#myModal").modal('hide');
            this.list.closeModal();
            this.list.getTaxes();
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
  getAllParametres() {
    this.isLoading = true

  this.taxeService.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.taxes = resultat.taxes.filter(x=>x.id != this.id)
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }


}
