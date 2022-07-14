import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FonctionPartagesService } from 'src/app/services/fonction-partages.service';
import { InformationsService } from 'src/app/services/informations.service';
import { TaxeService } from 'src/app/services/taxe.service';
import { UtiliteService } from 'src/app/services/utilite.service';

@Component({
  selector: 'app-list-taxe',
  templateUrl: './list-taxe.component.html',
  styleUrls: ['./list-taxe.component.scss']
})
export class ListTaxeComponent implements OnInit {
  title = 'appBootstrap';
  formC: FormGroup
  helloObject ="hello test";
  currentId ="";
   currentTr ="" ;
   Tr ;
   closeResult:string;

   objectKeys = Object.keys;
   items = {
    taux: "Taux"
   };
   itemsVariable = {
    taux: "active"
   };
   request = {
    search: {
      taux: ""
    },
    orderBy: {
      taux:  0

    },
    limit: 10,
    page: 1,
  }

  oldRequest = {
    search: {
      taux: ""

    },
    orderBy: {
      taux:  0

    },
    limit: 10,
    page: 1
  }

  constructor( private router :Router,
    private utilite:UtiliteService,
    private fonctionPartagesService:FonctionPartagesService,
    private fb: FormBuilder,
    private taxeService : TaxeService,
    public informationGenerale: InformationsService,
    private modalService: NgbModal
) {    this.formC = this.fb.group({
  taux: [''],
  limit: 10

 })
 this.getTaxes()}



 closeModal(){
this.getDismissReason(ModalDismissReasons.BACKDROP_CLICK);
 }

  ngOnInit(): void {
  }
  isLoading = false
  taxes = []
  getTaxes() {
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
    this.taxeService.getAll(this.request)
    .subscribe(
      res => {
        this.isLoading = false
        let resultat: any = res
        if (resultat.status) {
          this.taxes = resultat.resultat.docs
          console.log(resultat)
          this.totalPage = resultat.resultat.pages
          this.oldRequest = resultat.request
          if (this.totalPage < this.request.page && this.request.page != 1) {
            this.request.page = this.totalPage
            this.getTaxes()
          }

          if (!this.testSyncronisation(this.request, resultat.request) || (this.request.page != resultat.request.page)) {
            this.getTaxes()
          }
        }
      },
      error => {
        this.isLoading = false
        alert("Désolé, il y a un problème de connexion internet")
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
    this.getTaxes()
  }

  setPage(newPage: number) {
    this.request.page = newPage
    this.getTaxes()
  }

  titreFile = "Liste de taxes"
  nameFile = "liste_taxes"
  printout() {
    this.utilite.printout(this.taxes, this.items, this.titreFile)
  }

  generatePDF() {
    this.utilite.generatePDF(this.taxes, this.items, this.titreFile, this.nameFile)
  }

  exportexcel() {
    /* table id is passed over here */
    this.utilite.exportexcel(this.taxes, this.items, this.titreFile, this.nameFile)
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

    this.getTaxes()
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

  isOpenModalDelete = false
  idDeleteModal = ""
  params1Delete = ""
  params2Delete = ""
  deleteItem() {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.taxeService.delete(this.idDeleteModal)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.getTaxes()
            this.closeModalDelete()
          }
        },
        error => {
          this.isLoading = false
          alert("Désolé, il y a un problème de connexion internet")
        });

  }

  openModalDelete(id, params2) {
    this.idDeleteModal = id
    this.isOpenModalDelete = true
    this.params1Delete = "Le taxe"
    this.params2Delete = params2
  }

  closeModalDelete() {
    this.isOpenModalDelete = false
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
