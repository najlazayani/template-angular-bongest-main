import {  Component, OnInit, Input } from '@angular/core';
import { InformationsService } from 'src/app/services/informations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FonctionPartagesService } from 'src/app/services/fonction-partages.service';
import { UtiliteService } from 'src/app/services/utilite.service';
import { TransporteurService } from 'src/app/services/serviceBD_Commerce/transporteur.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModifierTransporteurComponent } from '../modifier-transporteur/modifier-transporteur.component';
import { PopupTransporteurComponent } from '../../popups/popup-transporteur/popup-transporteur.component';
import { Transporteur } from 'src/app/model/modelCommerce/transporteur';


@Component({
  selector: 'app-list-transporteur',
  templateUrl: './list-transporteur.component.html',
  styleUrls: ['./list-transporteur.component.scss']
})
export class ListTransporteurComponent implements OnInit {
  title = 'appBootstrap';
  formC: FormGroup
  helloObject ="hello test";
  currentId ="";
   currentTr ="" ;
   Tr ;
  objectKeys = Object.keys;
  items = {
    nom: "Nom",
    numVehicule: "Vehicule",
    gsm: "GSM",
    tel: "Téléphone",
    email: "Email",
  };

  itemsVariable = {
    nom: "active",
    numVehicule: "active",
    gsm: "active",
    tel: "active",
    email: "active",
  };

  request = {
    search: {
      nom: "",
      numVehicule: "",
      gsm: "",
      tel: "",
      email: "",
    },
    orderBy: {
      nom:  0,
      numVehicule:  0,
      gsm:  0,
      tel:  0,
      email:  0,
    },
    limit: 10,
    page: 1,
  }

  oldRequest = {
    search: {
      nom: "",
      numVehicule: "",
      gsm: "",
      tel: "",
      email: "",
    },
    orderBy: {
      nom:  0,
      numVehicule:  0,
      gsm:  0,
      tel:  0,
      email:  0,
    },
    limit: 10,
    page: 1
  }
  isOpenModalDelete = false
  idDeleteModal = ""
  params1Delete = ""
  params2Delete = ""

  deleteItem() {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.transporteurServ.delete(this.idDeleteModal)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.getTransporteurs()
            this.closeModalDelete()
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, ilya un problème de connexion internet")
        });

  }

  openModalDelete(id, params2) {
    this.idDeleteModal = id
    this.isOpenModalDelete = true
    this.params1Delete = "Le transporteur"
    this.params2Delete = params2
  }

  closeModalDelete() {
    this.isOpenModalDelete = false
  }
  closeResult:string;
  constructor(

    private router :Router,
    private utilite:UtiliteService,
    private fonctionPartagesService:FonctionPartagesService,
    private fb: FormBuilder,
    private transporteurServ : TransporteurService,
    public informationGenerale: InformationsService,
    private modalService: NgbModal

    ) {
    this.formC = this.fb.group({
      nom: [''],
      numVehicule: [''],
      gsm: [''],
      tel: [''],
      email: [''],

      limit: 10
    })

    this.getTransporteurs()

  }

  ngOnInit(): void {
  }

  isLoading = false
  transporteurs = []
  getTransporteurs() {
    if (this.isLoading) {
      return
    }
    for (let key in this.request.search) {
      this.request.search[key] = this.formC.value[key]
    }
    this.request.limit = this.formC.value.limit
    if (!this.testSyncronisation(this.request, this.oldRequest)) {
      this.request.page = 1
    }
    this.isLoading = true
    this.transporteurServ.getAll(this.request)
    .subscribe(
      res => {
        this.isLoading = false
        let resultat: any = res
        if (resultat.status) {
          this.transporteurs = resultat.resultat.docs
          console.log(resultat)
          this.totalPage = resultat.resultat.pages
          this.oldRequest = resultat.request
          if (this.totalPage < this.request.page && this.request.page != 1) {
            this.request.page = this.totalPage
            this.getTransporteurs()
          }

          if (!this.testSyncronisation(this.request, resultat.request) || (this.request.page != resultat.request.page)) {
            this.getTransporteurs()
          }
        }
      },
      error => {
        this.isLoading = false
        alert("Désole, ilya un problème de connexion internet")
      });
  }

  testSyncronisation(request1, request2) {
    for (let key in request1.search) {
      if (request1.search[key] != request2.search[key]) {
        return false
      }
    }

    for (let key in request1.orderBy) {
      if (request1.orderBy[key] != request2.orderBy[key]) {
        return false
      }
    }

    if (request1.limit != request2.limit) {
      return false
    }

    return true;
  }

  totalPage = 1

  setLimitPage(newLimitPage: number) {
    this.request.limit = newLimitPage
    this.request.page = 1
    this.getTransporteurs()
  }

  setPage(newPage: number) {
    this.request.page = newPage
    this.getTransporteurs()
  }

  titreFile = "Liste de transporteurs"
  nameFile = "liste_transporteurs"
  printout() {
    this.utilite.printout(this.transporteurs, this.items, this.titreFile)
  }

  generatePDF() {
    this.utilite.generatePDF(this.transporteurs, this.items, this.titreFile, this.nameFile)
  }

  exportexcel() {
    /* table id is passed over here */
    this.utilite.exportexcel(this.transporteurs, this.items, this.titreFile, this.nameFile)
  }

   //open modal ajout Element
   isOpenModalAjoutElement = false;
   idAjoutElementModal = "";
   typeElement

   closeModalAjoutElement(){
     this.isOpenModalAjoutElement = false
     this.getTransporteurs()
   }

   openModalAjoutTransporteur(){
    console.log(this.typeElement);
      this.typeElement = this.fonctionPartagesService.titreOfModal.ajouterTransporteur
      this.isOpenModalAjoutElement = true
   }

   openModalModifierTransporteur(id){
    console.log("edit najla");
    console.log(this.idAjoutElementModal);
     this.idAjoutElementModal = id
     console.log(this.typeElement);

     this.typeElement = this.fonctionPartagesService.titreOfModal.modifierTransporteur
     console.log(this.typeElement);
     this.isOpenModalAjoutElement = true
  }


  changeCroissante(key) {
    var classStyle = key + "-croissante";
    var buttons = document.getElementsByClassName(classStyle);
    if (this.request.orderBy[key] == 1) {
      this.request.orderBy[key] = -1
      this.activationCroissante(buttons[0], buttons[1])
    } else {
      this.request.orderBy[key] = 1
      this.activationCroissante(buttons[1], buttons[0])
    }

    for (let varkey in this.request.orderBy) {
      if (key != varkey) {
        this.request.orderBy[varkey] = 0
      }
    }

    this.getTransporteurs()
  }

  activationCroissante(buttons1, buttons2) {
    var buttons = document.getElementsByClassName("croissante");

    for (let i = 0; i < buttons.length; i++) {
      var classList = buttons[i].getAttribute("class")
      classList = classList.replace("active-buttons-croissante", "")
      buttons[i].setAttribute("class", classList)
    }

    classList = buttons2.getAttribute("class")
    classList = classList.replace("active-buttons-croissante", "")
    classList += " active-buttons-croissante"
    buttons2.setAttribute("class", classList)
  }
  ouvrirFenetreAjout(){
    console.log("najla is here!")
    this.router.navigateByUrl('/transporteur/ajout');

  }
  ouvrirFenetreModifier(id){
    //console.log("item!"+item);
    //console.log(id);
    //this.router.navigate(['/transporteur/modifier', id]);
    //const ref = this.modalService.open(ModifierTransporteurComponent)
     //ref.componentInstance.item=item;
   // this.router.navigateByUrl('/transporteur/modifier/:id');
   this.currentId=id;
   this.transporteurServ.currentID=this.currentId;
   //this.Tr = new Transporteur();

  this.Tr = this.transporteurServ.get(id).subscribe(
  res => {
    let resultat: any = res
    if (resultat.status) {

      this.currentTr = resultat.resultat.docs
      console.log(resultat)
      console.log(this.currentTr )
  }});
      console.log(this.Tr );




  }

  id = ""
  open(content , id) {

    this.id = id
    console.log("test id open"+id);
    console.log("test content");
    console.log(content);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.modalService.open(PopupTransporteurComponent,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;


    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //this.getTransporteurs;



    });

  }


  open2(content) {



    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.modalService.open(PopupTransporteurComponent,{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;


    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //this.getTransporteurs;



    });

  }



  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }








}









