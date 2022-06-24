import { UtiliteService } from './../services/utilite.service';
import { Component, OnInit,  Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InformationsService } from 'src/app/services/informations.service';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { ToastNotificationService } from 'src/app/services/toast-notification.service';
import { FonctionPartagesService } from 'src/app/services/fonction-partages.service';
import { Output, EventEmitter } from '@angular/core';
import { FnctModelService } from 'src/app/services/fonctionModel/fnct-model.service';


@Component({
  selector: 'app-importations-page',
  templateUrl: './importations-page.component.html',
  styleUrls: ['./importations-page.component.scss']
})
export class ImportationsPageComponent implements OnInit {

  constructor(private notificationToast:ToastNotificationService, 
    private http: HttpClient, 
    private fnctModel: FnctModelService,
    public informationGenerale: InformationsService, 
    public fonctionPartagesService:FonctionPartagesService,
    private utiliteServices: UtiliteService) 
    { 
    }

    
  objectKeys = Object.keys;

  shemaArticleExcel = {}
  ngOnInit(): void {
    this.shemaArticleExcel = JSON.parse(this.fonctionPartagesService.parametres.paramatresImportationArticle)
  }

  // Gestion des photos --debut--
  multiImage
  imageSelected
  imageSelectedSource
  componentField

  annulerImage(){
    this.imageSelected = null
    this.imageSelectedSource = null
    this.componentField = null
    this.articles = []
    this.pathFichier = ""
    //document.getElementById('fileInput').setAttribute("value", null)
  }

  selectedM(event) {
     this.multiImage = event.target.files;
     
     var files = event.target.files;
     if (files.length === 0)
     return;

     this.imageSelectedSource = files[0]
     
     var mimeType = files[0].type;
     //if (mimeType.match(/image\/*/) == null) {
     //   this.message = "Only images are supported.";
     //   return;
     //}

     var reader = new FileReader();
     
     reader.readAsDataURL(files[0]); 
     reader.onload = (_event) => { 
       this.imageSelected = reader.result
     }
  }
  // Gestion des photos --fin--

  image = ""
  isLoading = false
  importFichierArticles(){
    if(this.isLoading){
      return 
    }
    
    if(this.imageSelectedSource){
      const formData = new FormData();
      this.isLoading = true  
      var json_arr = JSON.stringify(["key","key2"])   
      formData.append('myFiles', this.imageSelectedSource) 
      this.http.post(this.informationGenerale.baseUrl+"/importations/upload", formData).subscribe(
        res => {   
          var arrayImages: any = res 
          this.isLoading = false;
         
          if(arrayImages.length > 0){
            this.pathFichier = arrayImages[0]
            this.sendFichierArticles()
          }
        }, err => {
          this.isLoading = false;
          return 
        }
      );
    }
  }

  articles = []
  pathFichier = ""

  sendFichierArticles(){
    if(this.pathFichier == ""){
        alert("aucun fichier sélectionné")     
    }

    if(this.isLoading){
      return 
    }
    
    var request = {
      tauxFodec:this.fonctionPartagesService.parametres.tauxFodec,
      pathFichier:this.pathFichier, 
      shema: JSON.parse(this.fonctionPartagesService.parametres.paramatresImportationArticle),
      societe:this.informationGenerale.idSocieteCurrent
    }

    this.isLoading = true  
    this.http.post(this.informationGenerale.baseUrl+"/importations/extractFromFile", request).subscribe(
      res => {
        var resultat:any = res        
        this.isLoading = false;
        if(resultat.status){
          this.articles = resultat.articles
        }
      }, err => {
        this.isLoading = false;
        return 
      }
    );
  
  }

  saveFichierArticles(){
    if(this.pathFichier == ""){
      alert("aucun fichier sélectionné")     
    }

    if(this.isLoading){
      return 
    }
    
    var request = {
      tauxFodec:this.fonctionPartagesService.parametres.tauxFodec,
      pathFichier:this.pathFichier, 
      shema: JSON.parse(this.fonctionPartagesService.parametres.paramatresImportationArticle),
      societe:this.informationGenerale.idSocieteCurrent
    }

    this.isLoading = true  
    this.http.post(this.informationGenerale.baseUrl+"/importations/saveFileArticle", request).subscribe(
      res => {        
        var resultat:any = res        
        this.isLoading = false;
        if(resultat.status){
          this.notificationToast.showSuccess("Votres articles sont bien enregistrée !")
          this.annulerImage() 
        }
      }, err => {
        this.isLoading = false;
        return 
      }
    );
  
  }

  telechargerExel(){
    this.utiliteServices.exportexcel([], JSON.parse(this.fonctionPartagesService.parametres.paramatresImportationArticle), "", "articles")
  }

}
