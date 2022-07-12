import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Famille } from 'src/app/model/famille';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { ServicesFamilleEquipementService } from 'src/app/services/services-famille-equipement/services-famille-equipement.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-ajout-famille',
  templateUrl: './ajout-famille.component.html',
  styleUrls: ['./ajout-famille.component.scss']
})
export class AjoutFamilleComponent implements OnInit {
  FamilleFormGroup: FormGroup;
  objectKeys = Object.keys;
  familles=[]
  getAllParametres() {
    this.isLoading = true

  this.familleServ.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.familles = resultat.familles
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }
  @Output() closeModalAjoutFamille = new EventEmitter<string>();

  @Input() isPopup = false

  @Input() isOpenModalAjoutFamille = false

  ngOnChanges(changes: SimpleChanges) {
    if(this.isOpenModalAjoutFamille == true){
      for (let key in this.erreurFamille) {
        this.erreurFamille[key] = ""
        if(document.getElementById(key) != null){
           document.getElementById(key).classList.remove("border-erreur")
        }
      }

      for (let key in this.famille) {
        this.famille[key] = ""
      }
    }
  }

  closeAjoutFamille(){
    this.closeModalAjoutFamille.emit();
  }

request = new Famille()

  famille  = new Famille()

  erreurFamille = {
    libelle: "",
  }
  constructor(
    private notificationToast: ToastNotificationService,
    private familleServ : ServicesFamilleEquipementService,
    private fnctModel:FnctModelService
    )
     { }

  ngOnInit(): void {
    this. getAllParametres()

  }


  controleInputs() {
    console.log("test")
    //reset Formulaire
    for (let key in this.erreurFamille) {
      console.log(key)
      this.erreurFamille[key] = ""
      if(document.getElementById(key) != null){
        console.log(document.getElementById(key))
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    //validation
    if (this.famille.libelle == "") {
     document.getElementById("libelle").classList.add("border-erreur")

     this.erreurFamille.libelle = "Veuillez remplir ce champ"
     isValid = false
   }

   if (this.famille.libelle != "" && this.familles.filter(x => x.libelle == this.famille.libelle).length > 0) {
    document.getElementById("libelle").classList.add("border-erreur")

    this.erreurFamille.libelle = "existe déja"
    isValid = false
  }


    return isValid
  }

  isLoading = false
  AjoutFamille() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.famille) {
      this.request[key] = this.famille[key]
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.familleServ.create(this.famille, this.request)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            console.log(resultat)
            this.closeAjoutFamille()
            this.notificationToast.showSuccess("Votre Famille d equipement est bien enregistrée !")
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  resetsFormulaire() {
    for (let key in this.erreurFamille) {
      this.famille[key] = ""
    }
  }

}


