import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Famille } from 'src/app/model/famille';
import { InformationsService } from 'src/app/services/informations.service';
import { ServicesFamilleEquipementService } from 'src/app/services/services-famille-equipement/services-famille-equipement.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-modifier-famille',
  templateUrl: './modifier-famille.component.html',
  styleUrls: ['./modifier-famille.component.scss']
})
export class ModifierFamilleComponent implements OnInit {
 parametreFormGroup: FormGroup;

  objectKeys = Object.keys;

  idT = this.familleServ.currentID;

  @Output() closeModalModifierFamille = new EventEmitter<string>();

  @Input() id = ""
  @Input() isOpenModalAjoutFamille = false

  closeModifierFamille(){
    this.closeModalModifierFamille.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {
      this.getFamille(this.id)
    }


  }

  request = new Famille()
  famille = new Famille()
  erreurFamille = {
   libelle: "",
  }

  familleId;
  private routeSub: Subscription;

  constructor(
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private familleServ : ServicesFamilleEquipementService,) {
  }

  getFamille(id) {
    console.log(this.famille)
    console.log("getFamilleTest"+id);
    this.isLoading = true
    this.familleServ.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {

            this.request = response.resultat
            console.log('test pp')
            console.log(this.request);
          
            this.famille = this.request
         
          console.log(this.famille)
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
      const familleId = params['id'];
      console.log("test id here");
      console.log(familleId);
      this.familleId = familleId;

    });
    console.log("test this.familleId");
    console.log(this.familleId);
    this.getFamille(this.familleId);

    // if (this.id.length > 1) {
    //   this.getTransporteur(this.id)
    // }
  }

  controleInputs() {
    for (let key in this.erreurFamille) {
      this.erreurFamille[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    for (let key in this.erreurFamille) {
      if (this.famille[key] == "") {
        if(document.getElementById(key) != null){
          document.getElementById(key).classList.add("border-erreur")
        }
        this.erreurFamille[key] = "Veuillez remplir ce champ"
        isValid = false
      }
    }

    return isValid
  }

  isLoading = false
  modifierFamille() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    console.log(this.familleId);
    this.familleServ.update(this.id, this.famille, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {
            this.closeModifierFamille()
            this.notificationToast.showSuccess("Votre Parametre est bien modifiée !")
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }


  reseteFormulaire() {
    for (let key in this.erreurFamille) {
      this.famille[key] = ""
    }
  }



}
