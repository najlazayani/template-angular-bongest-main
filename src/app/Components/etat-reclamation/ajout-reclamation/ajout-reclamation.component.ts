import { TransporteurService } from './../../../services/serviceBD_Commerce/transporteur.service';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InformationsService } from 'src/app/services/informations.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { Reclamation } from 'src/app/model/reclamation';
import { ReclamationService } from 'src/app/services/reclamation-service/reclamation.service';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.scss']
})
export class AjoutReclamationComponent implements OnInit {
reclamationFormGroup: FormGroup;
  lienAjoute = "/reclamations/newReclamation"
  objectKeys = Object.keys;

  @Output() closeModalAjoutReclamation = new EventEmitter<string>();

  @Input() isPopup = false

  @Input() isOpenModalAjoutReclamation = false

  ngOnChanges(changes: SimpleChanges) {
    if(this.isOpenModalAjoutReclamation == true){
      for (let key in this.erreurReclamation) {
        this.erreurReclamation[key] = ""
        if(document.getElementById(key) != null){
           document.getElementById(key).classList.remove("border-erreur")
        }
      }

      for (let key in this.reclamation) {
        this.reclamation[key] = ""
      }
    }
  }

  closeAjoutReclamation(){
    this.closeModalAjoutReclamation.emit();
  }

  request  = new Reclamation()

  reclamation  = new Reclamation()

  erreurReclamation = {
    libelle: "",
  }
  constructor(
    private notificationToast: ToastNotificationService,
    private informationGenerale: InformationsService,
    private reclamationServ : ReclamationService,
    private fnctModel:FnctModelService
    )
     { }

  ngOnInit(): void {
  }

  isLoading = false
  ajoutReclamation() {
    if (!this.fnctModel.controleInput(this.erreurReclamation, this.reclamation)) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.reclamation) {
      this.request[key] = this.reclamation[key]
    }
   
    this.isLoading = true
    this.reclamation.couleur=this.test()
    this.request.couleur=this.test()
    console.log(this.reclamation)
    this.reclamationServ.create(this.reclamation, this.request)
    
      .subscribe(
        res => {
          this.isLoading = false
      
          let resultat: any = res
        
          if (resultat.status) {
           /* resultat.couleur=this.test()*/
           console.log(resultat.couleur)
          resultat.couleur= this.test()
            console.log(resultat)
            this.closeAjoutReclamation()
            this.notificationToast.showSuccess("Votre reclamation est bien enregistrée !")
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  reseteFormulaire() {
    for (let key in this.erreurReclamation) {
      this.reclamation[key] = ""
    }
  }
  test(){
    var x= (<HTMLInputElement>document.getElementById('couleur')).value;
console.log(x)
    return x  }
}
