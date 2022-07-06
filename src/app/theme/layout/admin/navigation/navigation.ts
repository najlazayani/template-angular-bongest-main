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
        id: 'correctif',
        title: 'Correctif',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
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
        id: 'hygiene',
        title: 'Hygiéne',
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
