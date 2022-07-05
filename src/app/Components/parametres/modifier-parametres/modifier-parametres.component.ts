import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Parametre } from 'src/app/model/parametre';
import { InformationsService } from 'src/app/services/informations.service';
import { ParametresService } from 'src/app/services/parametre_services/parametres.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

@Component({
  selector: 'app-modifier-parametres',
  templateUrl: './modifier-parametres.component.html',
  styleUrls: ['./modifier-parametres.component.scss']
})
export class ModifierParametresComponent implements OnInit {
 parametreFormGroup: FormGroup;

  objectKeys = Object.keys;

  idT = this.parametreServ.currentID;

  @Output() closeModalModifierParametre = new EventEmitter<string>();

  @Input() id = ""
  @Input() isOpenModalAjoutParametre = false

  closeModifierParametre(){
    this.closeModalModifierParametre.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.id.length > 1) {
      this.getParametre(this.id)
    }


  }

  request = new Parametre()
  parametre = new Parametre()
  erreurParametre = {
    nom_parametre: "",
  }

  parametreId;
  private routeSub: Subscription;

  constructor(
    public informationGenerale: InformationsService,
    private route: ActivatedRoute,
    private notificationToast: ToastNotificationService,
    private parametreServ : ParametresService,) {
  }

  getParametre(id) {
    console.log(this.parametre)
    console.log("getParametreTest"+id);
    this.isLoading = true
    this.parametreServ.get(this.id)
      .subscribe(
        res => {
          this.isLoading = false
          let response: any = res
          if (response.status) {

            this.request = response.resultat
            console.log('test pp')
            console.log(this.request);
          
            this.parametre = this.request
         
          console.log(this.parametre)
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
      const parametreId = params['id'];
      console.log("test id here");
      console.log(parametreId);
      this.parametreId = parametreId;

    });
    console.log("test this.parametreId");
    console.log(this.parametreId);
    this.getParametre(this.parametreId);

    // if (this.id.length > 1) {
    //   this.getTransporteur(this.id)
    // }
  }

  controleInputs() {
    for (let key in this.erreurParametre) {
      this.erreurParametre[key] = ""
      if(document.getElementById(key) != null){
        document.getElementById(key).classList.remove("border-erreur")
      }
    }
    var isValid = true
    for (let key in this.erreurParametre) {
      if (this.parametre[key] == "") {
        if(document.getElementById(key) != null){
          document.getElementById(key).classList.add("border-erreur")
        }
        this.erreurParametre[key] = "Veuillez remplir ce champ"
        isValid = false
      }
    }

    return isValid
  }

  isLoading = false
  modifierParametre() {
    if (!this.controleInputs()) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    console.log(this.parametreId);
    this.parametreServ.update(this.id, this.parametre, this.request)
      .subscribe(
        res => {

          this.isLoading = false
          let resultat: any = res

          console.log("test resultat"+res);
          if (resultat.status) {
            this.closeModifierParametre()
            this.notificationToast.showSuccess("Votre Parametre est bien modifiée !")
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
