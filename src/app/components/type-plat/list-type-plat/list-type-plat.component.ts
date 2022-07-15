import {  Component, OnInit, Input } from '@angular/core';
import { InformationsService } from 'src/app/services/informations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FonctionPartagesService } from 'src/app/services/fonction-partages.service';
import { UtiliteService } from 'src/app/services/utilite.service';
//import { TransporteurService } from 'src/app/services/serviceBD_Commerce/transporteur.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { TypePlatService } from 'src/app/services/type-plat.service';
import { TypePlat } from 'src/app/model/typePlat';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';

//import { Transporteur } from 'src/app/model/modelCommerce/transporteur';


@Component({
  selector: 'app-list-type-plat',
  templateUrl: './list-type-plat.component.html',
  styleUrls: ['./list-type-plat.component.scss']
})
export class ListTypePlatComponent implements OnInit {
  title = 'appBootstrap';
  formC: FormGroup
  helloObject ="hello test";
  currentId ="";
   currentTr ="" ;
   Tr ;
  objectKeys = Object.keys;
  items = {
    libelle: "Libelle"

  };

  itemsVariable = {
    libelle: "active"
  };

  request = {
    search: {
      libelle: ""
    },
    orderBy: {
      libelle:  0
    },
    limit: 10,
    page: 1,
  }

  oldRequest = {
    search: {
      libelle: ""
    },
    orderBy: {
      libelle:  0
    },
    limit: 10,
    page: 1
  }
  isOpenModalDelete = false
  idDeleteModal = ""
  params1Delete = ""
  params2Delete = ""

  //pas 1 pour fermuture Modal
  modalReference:NgbModalRef

  deleteItem() {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.typePlatService.delete(this.idDeleteModal)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.getTypePlats()
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
    private typePlatService : TypePlatService,
    private utilite:UtiliteService,
    private fonctionPartagesService:FonctionPartagesService,
    private fb: FormBuilder,

    public informationGenerale: InformationsService,
    private modalService: NgbModal,
    private notificationToast: ToastNotificationService,

    private fnctModel:FnctModelService

    ) {
    this.formC = this.fb.group({
      libelle: [''],

      limit: 10
    })

    this.getTypePlats()

  }

  ngOnInit(): void {
  }

  isLoading = false
  typePlats = []
  getTypePlats() {
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
    this.typePlatService.getAll(this.request)
    .subscribe(
      res => {
        this.isLoading = false
        let resultat: any = res
        if (resultat.status) {
          this.typePlats = resultat.resultat.docs
          console.log(resultat)
          this.totalPage = resultat.resultat.pages
          this.oldRequest = resultat.request
          if (this.totalPage < this.request.page && this.request.page != 1) {
            this.request.page = this.totalPage
            this.getTypePlats()
          }

          if (!this.testSyncronisation(this.request, resultat.request) || (this.request.page != resultat.request.page)) {
            this.getTypePlats()
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
    this.getTypePlats()
  }

  setPage(newPage: number) {
    this.request.page = newPage
    this.getTypePlats()
  }

  titreFile = "Liste de typePlats"
  nameFile = "liste_typePlats"
  printout() {
    this.utilite.printout(this.typePlats, this.items, this.titreFile)
  }

  generatePDF() {
    this.utilite.generatePDF(this.typePlats, this.items, this.titreFile, this.nameFile)
  }

  exportexcel() {
    /* table id is passed over here */
    this.utilite.exportexcel(this.typePlats, this.items, this.titreFile, this.nameFile)
  }

   //open modal ajout Element
  // isOpenModalAjoutElement = false;
   idAjoutElementModal = "";
   typeElement








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

    this.getTypePlats()
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

  //pas 3 pour fermeture Modal
  closeModal(){
    this.modalReference.close()
  }

  open2(content) {


    //pas 2 pour fermeture Modal
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.modalReference.result.then((result) => {
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


  //ajout
  request1  = new TypePlat()

  typePlat  = new TypePlat()

  erreurTypePlat = {
    libelle: "",
  }

  ajoutTypePlat() {
    if (!this.fnctModel.controleInput(this.erreurTypePlat, this.typePlat)) {
      this.notificationToast.showError("Veuillez remplir les champs obligatoires !")
      return
    }
    for (let key in this.typePlat) {
      this.request1[key] = this.typePlat[key]
    }
    //this.request.societeRacine = this.informationGenerale.idSocieteCurrent
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.typePlatService.create(this.typePlat, this.request1)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            console.log(resultat)
            //this.closeAjoutTransporteur()
            this.notificationToast.showSuccess("Votre typePlat est bien enregistrée !")
            this.getTypePlats();

            //pas 4 pour fermeture Modal
            this.closeModal()
          }
        },
        error => {
          this.isLoading = false
          alert("Désole, il y a un problème de connexion internet")
        });
  }

  reseteFormulaire() {
    for (let key in this.erreurTypePlat) {
      this.typePlat[key] = ""
    }
  }


  //Modifier












}
