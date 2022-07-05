import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reclamation } from 'src/app/model/reclamation';
import { InformationsService } from 'src/app/services/informations.service';
import { ReclamationService } from 'src/app/services/reclamation-service/reclamation.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-modifier-reclamation',
  templateUrl: './modifier-reclamation.component.html',
  styleUrls: ['./modifier-reclamation.component.scss']
})
export class ModifierReclamationComponent implements OnInit {
 reclamationFormGroup: FormGroup;

  objectKeys = Object.keys;

  idT = this.reclamationServ.currentID;

  @Output() closeModalModifierReclamation = new EventEmitter<string>();

  @Input() id = ""
  @Input() isOpenModalAjoutReclamation = false

  closeModifierReclamation(){
    this.closeModalModifierReclamation.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {
      this.getReclamation(this.id)
    }


  }

  request = new Reclamation()
  reclamation = new Reclamation()
  erreurReclamation = {
    couleur: "",
  }

  reclamationId;
  private routeSub: Subscription;

  constructor(
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private reclamationServ : ReclamationService,) {
  }

  getReclamation(id) {
    console.log(this.reclamation)
    console.log("getReclamationTest"+id);
    this.isLoading = true
    this.reclamationServ.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {

            this.request = response.resultat
            console.log('test pp')
            console.log(this.request);
          
            this.reclamation = this.request
         
          console.log(this.reclamation)
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, ilya un problème de connexion internet")
        });
  }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      const reclamationId = params['id'];
      console.log("test id here");
      console.log(reclamationId);
      this.reclamationId = reclamationId;

    });
    console.log("test this.reclamationId");
    console.log(this.reclamationId);
    this.getReclamation(this.reclamationId);

    // if (this.id.length > 1) {
    //   this.getTransporteur(this.id)
    // }
  }

  controleInputs() {
    for (let key in this.erreurReclamation) {
      this.erreurReclamation[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    for (let key in this.erreurReclamation) {
      if (this.reclamation[key] == "") {
        if(document.getElementById(key) != null){
          document.getElementById(key).classList.add("border-erreur")
        }
        this.erreurReclamation[key] = "Veuillez remplir ce champ"
        isValid = false
      }
    }

    return isValid
  }

  isLoading = false
  modifierReclamation() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    console.log(this.reclamationId);
    this.reclamationServ.update(this.id, this.reclamation, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {
            this.closeModifierReclamation()
            this.notificationToast.showSuccess("Votre reclamation est bien modifiée !")
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



}
