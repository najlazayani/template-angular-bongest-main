import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Taxe } from 'src/app/model/taxe';
import { InformationsService } from 'src/app/services/informations.service';
import { TaxeService } from 'src/app/services/taxe.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

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
  erreurTaxe = {
    taux: "",
  }
  isLoading = false
  transporId;
  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {
      this.getTaxe(this.id)
    }


  }
  constructor(
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private taxeService:TaxeService) { }
    private routeSub: Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      const transportId = params['id'];
      console.log("test id here");
      console.log(transportId);
      this.transporId = transportId;

    });
    console.log("test this.transporId");
    console.log(this.transporId);
    this.getTaxe(this.transporId);
  }

  getTaxe(id) {
    console.log("getTaxeTest"+id);
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
        },
        error => {
          this.isLoading = false
          alert("Désole, ilya un problème de connexion internet")
        });
  }

  controleInputs() {
    for (let key in this.erreurTaxe) {
      this.erreurTaxe[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    for (let key in this.erreurTaxe) {
      if (this.taxe[key] == "") {
        if(document.getElementById(key) != null){
          document.getElementById(key).classList.add("border-erreur")
        }
        this.erreurTaxe[key] = "Veuillez remplir ce champ"
        isValid = false
      }
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
            this.notificationToast.showSuccess("Votre transporteur est bien modifiée !")
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
