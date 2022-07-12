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
  parametres=[]
  getAllParametres() {
    this.isLoading = true

  this.parametreServ.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.parametres = resultat.parametres
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }

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
    valeur: "",
  }
  constructor(
    private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private parametreServ : ParametresService,
    private fnctModel:FnctModelService
    )
     { }

  ngOnInit(): void {
    this. getAllParametres()

  }
  controleInputs() {
    console.log("test")
    //reset Formulaire
    for (let key in this.erreurParametre) {
      console.log(key)
      this.erreurParametre[key] = ""
      if(document.getElementById(key) != null){
        console.log(document.getElementById(key))
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    //validation
    if (this.parametre.nom_parametre == ""  ) {
     document.getElementById("nom_parametre").classList.add("border-erreur")
console.log('test')
     this.erreurParametre.nom_parametre = "Veuillez remplir ce champ"

     isValid = false
   }
   if (this.parametre.valeur == ""  ) {
    document.getElementById("valeur").classList.add("border-erreur")
    console.log('test')
    this.erreurParametre.valeur = "Veuillez remplir ce champ"

    isValid = false
  }
   if (this.parametre.nom_parametre != "" && this.parametres.filter(x => x.nom_parametre == this.parametre.nom_parametre).length > 0) {
    document.getElementById("nom_parametre").classList.add("border-erreur")

    this.erreurParametre.nom_parametre = "existe déja"
    isValid = false
  }
  if (this.parametre.valeur != "" && this.parametres.filter(x => x.valeur == this.parametre.valeur).length > 0) {
    document.getElementById("valeur").classList.add("border-erreur")

    this.erreurParametre.valeur = "existe déja"
    isValid = false
  }



    return isValid
  }
  isLoading = false
  ajoutParametre() {
    if (!this.controleInputs()) {
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
            this.notificationToast.showSuccess("Votre parametres est bien enregistrée !")
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
