import { TransporteurService } from './../../../services/serviceBD_Commerce/transporteur.service';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { Transporteur } from 'src/app/model/modelCommerce/transporteur';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { Parametre } from 'src/app/model/parametre';
import { ParametresService } from 'src/app/services/parametre_services/parametres.service';

@Component({
  selector: 'app-ajout-parametres',
  templateUrl: './ajout-parametres.component.html',
  styleUrls: ['./ajout-parametres.component.scss']
})
export class AjoutParametresComponent implements OnInit {
  transporteurFormGroup: FormGroup;
  lienAjoute = "/parametres/newParametre"
  objectKeys = Object.keys;

  @Output() closeModalAjoutParametre = new EventEmitter<string>();

  @Input() isPopup = false

  @Input() isOpenModalAjoutParametre = false

  ngOnChanges(changes: SimpleChanges) {
    if(this.isOpenModalAjoutParametre == true){
      for (let key in this.erreurParametre) {
        this.erreurParametre[key] = ""
        if(document.getElementById(key) != null){
           document.getElementById(key).classList.remove("border-erreur")
        }
      }

      for (let key in this.parametre) {
        this.parametre[key] = ""
      }
    }
  }

  closeAjoutParametre(){
    this.closeModalAjoutParametre.emit();
  }

  request  = new Parametre()

  parametre  = new Parametre()

  erreurParametre = {
    nom_parametre: "",
  }
  constructor(
    private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private parametreServ : ParametresService,
    private fnctModel:FnctModelService
    )
     { }

  ngOnInit(): void {
  }

  isLoading = false
  ajoutParametre() {
    if (!this.fnctModel.controleInput(this.erreurParametre, this.parametre)) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.parametre) {
      this.request[key] = this.parametre[key]
    }
   
    this.isLoading = true
    this.parametreServ.create(this.parametre, this.request)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            console.log(resultat)
            this.closeAjoutParametre()
            this.notificationToast.showSuccess("Votre transporteur est bien enregistrée !")
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  reseteFormulaire() {
    for (let key in this.erreurParametre) {
      this.parametre[key] = ""
    }
  }

}
