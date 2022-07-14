import {Injectable} from '@angular/core';
import { TokenStorageService } from '../../../../../app/services/authentication/token-storage.service'

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'param',
        title: 'Param',
        type: 'collapse',
        icon: 'feather icon-shuffle',
        classes: 'nav-item',
        children: [
      {
        id: 'donneBase',
        title: 'BDD',
        type: 'collapse',
        icon: 'feather icon-align-justify',
        classes: 'nav-item',
        children: [

         {
            id: 'type-departement',
            title: 'Type de département',
            type: 'item',
            classes: 'nav-item',
            url: '/type-departement/list',
            icon: 'feather icon-sliders'
           },
           {
            id: 'type-equipement',
            title: 'type equipement',
            type: 'item',
            classes: 'nav-item',
            url: '',
            icon: 'feather icon-sliders'
           },
           {
            id: 'famille-equipement',
            title: 'famille equipement',
            type: 'item',
            classes: 'nav-item',
            url: '',
            icon: 'feather icon-sliders'
           },







        ]
      }

  ,

  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'achat',
        title: 'Achats',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [
          // {
          //   id: 'demandeAchatInterne',
          //   title: 'Demande achat interne',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonRetour',
          //   icon: 'feather icon-arrow-down-left'
          // },
          // {
          //   id: 'demandeOffresPrix',
          //   title: 'Demande offres prix',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonRetour',
          //   icon: 'feather icon-award'
          // },
          // {
          //   id: 'DevisAchat',
          //   title: 'Devis Achat',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonRetour',
          //   icon: 'feather icon-copy'
          // },
          {
            id: 'bonsCommande',
            title: 'Bons de commande',
            type: 'item',
            classes: 'nav-item',
            url: '/bonCommande/list',
            icon: 'feather icon-file-text'
          },
          {
            id: 'bonsReception',
            title: 'Bons de reception',
            type: 'item',
            classes: 'nav-item',
            url: '/bonReception/list',
            icon: 'feather icon-file-text'
          },
          {
            id: 'bonsAchat',
            title: 'Bons Achat',
            type: 'item',
            classes: 'nav-item',
            url: '/bonAchat/list',
            icon: 'feather icon-file-text'
          },
          {
            id: 'BonRetourFournisseur',
            title: 'Bon Retour Fournisseur',
            type: 'item',
            url: '/bonRetourFournisseur/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          // {
          //   id: 'avoirsFournisseurs',
          //   title: 'Avoirs fournisseurs',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonLivraison',
          //   icon: 'feather icon-bell'
          // },
          // {
          //   id: 'memoiresReglements',
          //   title: 'Mémoires de reglements',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonCommande',
          //   icon: 'feather icon-cpu'
          // },
          // {
          //   id: 'suivieAchat',
          //   title: 'Suivie achat',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonLivraison',
          //   icon: 'feather icon-refresh-cw'
          // },
          {
            id: 'releveeFournisseur',
            title: 'Relevee fournisseur',
            type: 'item',
            classes: 'nav-item',
            url: '/fournisseur/releveFournisseur',
            icon: 'feather icon-server'
          },
          {
            id: 'classementFournisseurs',
            title: 'Classement fournisseurs',
            type: 'item',
            classes: 'nav-item',
            url: '/bonCommande',
            icon: 'feather icon-server'
          },
          {
            id: 'ReglementsBonAchat',
            title: 'Reglements B.A',
            type: 'item',
            classes: 'nav-item',
            url: '/reglement/bonAchat/list',
            icon: 'feather icon-align-justify'
          },
          {
            id: 'ReglementsBonRetourFournisseur',
            title: 'Reglements B.R.F',
            type: 'item',
            classes: 'nav-item',
            url: '/reglement/bonRetourFournisseur/list',
            icon: 'feather icon-align-justify'
          }

        ]
      }
    ]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children:[
     {
      id: 'preventif',
      title: 'Préventif',
      type: 'collapse',
      icon: 'feather icon-layers',
      children: [



      ]
     }
    ]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'vente',
        title: 'Vente',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [
          {
            id: 'famille-produit',
            title: 'Famille de produit',
            type: 'item',
            classes: 'nav-item',
            url: '/famille-produit/list',
            icon: 'feather icon-file-minus',
          },

          {
            id: 'type-plat',
            title: 'Type de plat',
            type: 'item',
            classes: 'nav-item',
            url: '',
            icon: 'feather icon-file-minus'
          },
          {
            id: 'plat',
            title: 'Plat',
            type: 'item',
            classes: 'nav-item',
            url: '',
            icon: 'feather icon-file-minus'
          },



        ]
      }
    ]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'stock',
        title: 'Stock',
        type: 'collapse',
        icon: 'feather icon-layers',
        children: [

        ]
      }
    ]
  },


  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'energie',
        title: 'Energie',
        type: 'collapse',
        icon: 'feather icon-grid',
        children: [





        ]
      }
    ]
  },

  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'achats',
        title: 'Achats',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',

      }]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'parametres',
        title: 'Paramètres',
        type: 'collapse',
        icon: 'feather icon-shuffle',





      }]
  },

]
  }]}]

@Injectable()
export class NavigationItem {

  constructor(private tokenStorageService:TokenStorageService){

  }

  public get() {

   // const user = this.tokenStorageService.getUser()
    let newNavigationsItems = []

   /* if(user != undefined && user != null && user != {} && user.role != null){
      newNavigationsItems = this.getItemsFormNavigation(NavigationItems, user)
    }*/

    return NavigationItems;

  }

  getItemsFormNavigation(navigationItems, user){
     let newNavigation = []

     for(let item of navigationItems){
        if(item.children && item.children.length > 0){

          let childrens = this.getItemsFormNavigation(item.children, user)
          item.children = childrens

          if(this.checkIsValide(item, user)){
            newNavigation.push(item)
          }
        }else{
          if(this.checkIsValide(item, user)){
             newNavigation.push(item)
          }
        }
     }

     return newNavigation
  }

  checkIsValide(item, user){
    if(user.role.modules.filter(x => x.id == item.id).length > 0){
      let module = user.role.modules.filter(x => x.id == item.id)[0]
      if(module.avoirAccee != "non" ){
        return true
      }
    }else{
      return true
    }
    return false
  }

}
