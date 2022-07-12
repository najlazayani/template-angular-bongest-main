import {  Component, OnInit, Input } from '@angular/core';
import { InformationsService } from 'src/app/services/informations.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FonctionPartagesService } from 'src/app/services/fonction-partages.service';
import { UtiliteService } from 'src/app/services/utilite.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ServicesFamilleEquipementService } from 'src/app/services/services-famille-equipement/services-famille-equipement.service';


@Component({
  selector: 'app-list-famille',
  templateUrl: './list-famille.component.html',
  styleUrls: ['./list-famille.component.scss']
})
export class ListFamilleComponent implements OnInit {
  title = 'appBootstrap';
  formC: FormGroup
  helloObject ="hello test";
  currentId ="";
   currentTr ="" ;
   Tr ;
  objectKeys = Object.keys;
  items = {
    libelle: "libelle",
  
  };

  itemsVariable = {
    libelle: "active",
  
  };

  request = {
    search: {
      libelle: "",
     
    
    },
    orderBy: {
      libelle:  0,
     
    },
    limit: 10,
    page: 1,
  }

  oldRequest = {
    search: {
      libelle: "",
  
     
    },
    orderBy: {
      libelle:  0,
  
    
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
    this.familleServ.delete(this.idDeleteModal)
      .subscribe(
        res => {
          this.isLoading = false
          let resultat: any = res
          if (resultat.status) {
            this.getFamilles()
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
    this.params1Delete = "La famille"
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
    private familleServ : ServicesFamilleEquipementService,
    public informationGenerale: InformationsService,
    private modalService: NgbModal

    ) {
    this.formC = this.fb.group({
      libelle: [''],

     

      limit: 10
    })

    this.getFamilles()

  }

  ngOnInit(): void {
  }

  isLoading = false
  familles = []
  getFamilles() {
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
    this.familleServ.getAll(this.request)
    .subscribe(
      res => {
        this.isLoading = false
        let resultat: any = res
        if (resultat.status) {
          this.familles = resultat.resultat.docs
          console.log(resultat)
          this.totalPage = resultat.resultat.pages
          this.oldRequest = resultat.request
          if (this.totalPage < this.request.page && this.request.page != 1) {
            this.request.page = this.totalPage
            this.getFamilles()
          }

          if (!this.testSyncronisation(this.request, resultat.request) || (this.request.page != resultat.request.page)) {
            this.getFamilles()
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
    this.getFamilles()
  }

  setPage(newPage: number) {
    this.request.page = newPage
    this.getFamilles()
  }

  titreFile = "Liste de familles"
  nameFile = "liste_familles"
  printout() {
    this.utilite.printout(this.familles, this.items, this.titreFile)
  }

  generatePDF() {
    this.utilite.generatePDF(this.familles, this.items, this.titreFile, this.nameFile)
  }

  exportexcel() {
    /* table id is passed over here */
    this.utilite.exportexcel(this.familles, this.items, this.titreFile, this.nameFile)
  }

   //open modal ajout Element
   isOpenModalAjoutElement = false;
   idAjoutElementModal = "";
   typeElement

   closeModalAjoutElement(){
     this.isOpenModalAjoutElement = false
     this.getFamilles()
   }

   /*openModalAjoutParametres(){
    console.log(this.typeElement);
      this.typeElement = this.fonctionPartagesService.titreOfModal.ajouterParametres
      this.isOpenModalAjoutElement = true
   }*/

  /* openModalModifierParametres(id){
    console.log("edit najla");
    console.log(this.idAjoutElementModal);
     this.idAjoutElementModal = id
     console.log(this.typeElement);

     this.typeElement = this.fonctionPartagesService.titreOfModal.modifierParametres
     console.log(this.typeElement);
     this.isOpenModalAjoutElement = true
  }**/


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

    this.getFamilles()
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
    this.router.navigateByUrl('/famille/ajout');

  }
  ouvrirFenetreModifier(id){
 
   this.currentId=id;
   this.familleServ.currentID=this.currentId;

  this.Tr = this.familleServ.get(id).subscribe(
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
    console.log(id)

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  
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









