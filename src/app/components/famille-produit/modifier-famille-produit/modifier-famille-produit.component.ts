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
      this.getFamilleProduit(this.id)
    }


  }
  constructor(public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private familleProduitService:FamilleProduitService) { }
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
    this.getFamilleProduit(this.transporId);
  }
  getFamilleProduit(id) {
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
        },
        error => {
          this.isLoading = false
          alert("Désole, ilya un problème de connexion internet")
        });
  }

  controleInputs() {
    for (let key in this.erreurFamilleProduit) {
      this.erreurFamilleProduit[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    for (let key in this.erreurFamilleProduit) {
      if (this.familleProduit[key] == "") {
        if(document.getElementById(key) != null){
          document.getElementById(key).classList.add("border-erreur")
        }
        this.erreurFamilleProduit[key] = "Veuillez remplir ce champ"
        isValid = false
      }
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
            this.notificationToast.showSuccess("Votre transporteur est bien modifiée !")
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
