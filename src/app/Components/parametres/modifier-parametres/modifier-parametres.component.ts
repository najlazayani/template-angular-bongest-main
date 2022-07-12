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
  parametres=[]
  getAllParametres() {
    this.isLoading = true

  this.parametreServ.parametre()
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.parametres = resultat.parametres.filter(x=> x.id != this.id)
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
    }



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
    valeur:"",
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
