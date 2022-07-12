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
<<<<<<< HEAD
        id: 'param',
        title: 'Param',
        type: 'collapse',
        icon: 'feather icon-shuffle',
        classes: 'nav-item',
        children: [
      {
        id: 'donneBase',
        title: 'BDD',
=======
        id: 'donneBase',
        title: 'Donnees de base',
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b
        type: 'collapse',
        icon: 'feather icon-align-justify',
        classes: 'nav-item',
        children: [
<<<<<<< HEAD

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




=======
      
          // {
          //   id: 'equivalenceArticles',
          //   title: 'Equivalence Articles',
          //   type: 'item'
          //   classes: 'nav-item',
          //   url: '/bonLivraison',
          //   icon: 'feather icon-sliders'
          // },

        
         

          {
            id: 'transporteur',
            title: 'Transporteur',
            type: 'item',
            classes: 'nav-item',
            url: '/transporteur/list',
            icon: 'feather icon-shuffle'
          },
          {
            id: 'importations',
            title: 'Importations',
            type: 'item',
            classes: 'nav-item',
            url: '/importations',
            icon: 'feather icon-shuffle'
          },
          
         

          {
            id: 'reclamation',
            title: 'Etat Reclamation',
            type: 'item',
            classes: 'nav-item',
            url: '/reclamation/list',
            icon: 'feather icon-shuffle'
          },
        
          {
            id: 'famille',
            title: 'Famille d equipement',
            type: 'item',
            classes: 'nav-item',
            url: '/famille/list',
            icon: 'feather icon-shuffle'
          },
          {
            id: 'parametres',
            title: 'Parametres',
            type: 'item',
            classes: 'nav-item',
            url: '/parametre/list',
            icon: 'feather icon-shuffle'
          },
          // {
          //   id: 'commerciaux',
          //   title: 'Commerciaux',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonTravail',
          //   icon: 'feather icon-user-check'
          // },
          // {
          //   id: 'banques',
          //   title: 'Banques',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/banque',
          //   icon: 'feather icon-bar-chart'
          // },

          // {
          //   id: 'soldeTiers',
          //   title: 'Solde initiaux des tiers',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bonRetour',
          //   icon: 'feather icon-user-check'
          // },
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b



        ]
      }
<<<<<<< HEAD

  ,
=======
    ]
  },
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b

  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
<<<<<<< HEAD
        id: 'correctif',
        title: 'Correctif',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [


=======
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
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b

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
<<<<<<< HEAD
      id: 'preventif',
      title: 'Préventif',
      type: 'collapse',
      icon: 'feather icon-layers',
      children: [

=======
      id: 'stock',
      title: 'Stock',
      type: 'collapse',
      icon: 'feather icon-layers',
      children: [
        {
          id: 'bonsEntree',
          title: 'Bons Entree',
          type: 'item',
          classes: 'nav-item',
          url: '/bonEntree',
          icon: 'feather icon-file-plus'
        },
        {
          id: 'BonsSortie',
          title: 'Bons de sortie',
          type: 'item',
          classes: 'nav-item',
          url: '/bonCommande',
          icon: 'feather icon-file-plus'
        },
        {
          id: 'bonTransfert',
          title: 'Bon de transfert',
          type: 'item',
          classes: 'nav-item',
          url: '/bonTransfert/list',
          icon: 'feather icon-arrow-down-left'
        },
        {
          id: 'rappelStock',
          title: 'Rappel Stock',
          type: 'item',
          classes: 'nav-item',
          url: '/rappelStock',
          icon: 'feather icon-arrow-down-left'
        },
        // {
        //   id: 'bonReservation',
        //   title: 'Bon de reservation',
        //   type: 'item',
        //   classes: 'nav-item',
        //   url: '/bonReservation',
        //   icon: 'feather icon-log-out'
        // },
        {
          id: 'bonCasses',
          title: 'Bon de casses',
          type: 'item',
          classes: 'nav-item',
          url: '/bonCasse/list',
          icon: 'feather icon-x'
        },
        {
          id: 'mouvementStock',
          title: 'Mouvement de stock',
          type: 'item',
          url: '/mouvementStock',
          classes: 'nav-item',
          icon: 'feather icon-shuffle'
        },
        {
          id: 'correctionStock',
          title: 'Correction Stock',
          type: 'item',
          url: '/correctionStock/list',
          classes: 'nav-item',
          icon: 'feather icon-box'
        },
        {
          id: 'inventaire',
          title: 'Inventaire',
          type: 'item',
          classes: 'nav-item',
          url: '/inventaire/list',
          icon: 'feather icon-user-check'
        },
        {
          id: 'alerteStock',
          title: 'Alerte de stock',
          type: 'item',
          classes: 'nav-item',
          url: '/article/alertStock',
          icon: 'feather icon-bell'
        },
        {
          id: 'suiviePieces',
          title: 'Suivie des pieces (N° serie)',
          type: 'item',
          classes: 'nav-item',
          url: '/bonRetour',
          icon: 'feather icon-file'
        },
        {
          id: 'valeurStock',
          title: 'Valeur de stock',
          type: 'item',
          classes: 'nav-item',
          url: '/valeurStock',
          icon: 'feather icon-user-check'
        },
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b


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
<<<<<<< HEAD
        id: 'hygiene',
        title: 'Hygiéne',
=======
        id: 'vente',
        title: 'Vente',
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [
          {
<<<<<<< HEAD
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


=======
            id: 'devis',
            title: 'Devis',
            type: 'item',
            classes: 'nav-item',
            url: '/devis/list',
            icon: 'feather icon-file-text'
          },
          {
            id: 'commandes',
            title: 'Commandes',
            type: 'item',
            classes: 'nav-item',
            url: '/commande/list',
            icon: 'feather icon-file-minus'
          },
          {
            id: 'bonsLivraison',
            title: 'Bons de livraison',
            type: 'item',
            classes: 'nav-item',
            url: '/bonLivraison/list',
            icon: 'feather icon-file-text'
          },
          {
            id: 'BonRetourClient',
            title: 'Bon Retour Client',
            type: 'item',
            url: '/bonRetourClient/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'factures',
            title: 'Factures',
            type: 'item',
            classes: 'nav-item',
            url: '/facture',
            icon: 'feather icon-file-text'
          },
          // {
          //   id: 'facturesAvoir',
          //   title: 'Factures avoir',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/factureAvoir',
          //   icon: 'feather icon-file-text'
          // },
          // {
          //   id: 'ordreLivraison',
          //   title: 'Ordre de livraison',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/ordreLivraison',
          //   icon: 'feather icon-file-text'
          // },
          // {
          //   id: 'calendrierLivraison',
          //   title: 'Calendrier de livraison',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/calendrierLivraison',
          //   icon: 'feather icon-file-text'
          // },
          {
            id: 'projetsClient',
            title: 'Projets clients',
            type: 'item',
            classes: 'nav-item',
            url: '/client/projet/list',
            icon: 'feather icon-users'
          },

          {
            id: 'ListArticlesVendu',
            title: 'Produits vendu',
            type: 'item',
            classes: 'nav-item',
            url: '/articlesVendu',
            icon: 'feather icon-file-minus'
          },

          {
            id: 'ReglementsBonLivraison',
            title: 'Reglements B.L',
            type: 'item',
            classes: 'nav-item',
            url: '/reglement/bonLivraison/list',
            icon: 'feather icon-align-justify'
          },
          {
            id: 'ReglementsBonRetourClient',
            title: 'Reglements B.R.C',
            type: 'item',
            classes: 'nav-item',
            url: '/reglement/bonRetourClient/list',
            icon: 'feather icon-align-justify'
          },
          {
            id: 'releveeClient',
            title: 'Relevee client',
            type: 'item',
            classes: 'nav-item',
            url: '/releveClientF',
            icon: 'feather icon-server'
          },
          {
            id: 'releveeClientDetaille',
            title: 'Relevee client Detaille',
            type: 'item',
            classes: 'nav-item',
            url: '/releveClientDetaille',
            icon: 'feather icon-server'
          },
          {
            id: 'classementClient',
            title: 'Classement client',
            type: 'item',
            classes: 'nav-item',
            url: '/client/classementClient',
            icon: 'feather icon-users'
          },
          {
            id: 'prixSpecifique',
            title: 'Prix specifique',
            type: 'item',
            classes: 'nav-item',
            url: '/prixSpecifiques',
            icon: 'feather icon-paperclip'
          }
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b

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
<<<<<<< HEAD
        id: 'stock',
        title: 'Stock',
        type: 'collapse',
        icon: 'feather icon-layers',
        children: [

=======
        id: 'finance',
        title: 'Finance',
        type: 'collapse',
        icon: 'feather icon-clipboard',
        children: [
          // {
          //   id: 'encaissements',
          //   title: 'Encaissements',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/encaissements',
          //   icon: 'feather icon-book'
          // },
          // {
          //   id: 'decaissements',
          //   title: 'Decaissements',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/decaissements',
          //   icon: 'feather icon-box'
          // },
          // {
          //   id: 'recetteDepense',
          //   title: 'Recette et depense',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/recetteDepense',
          //   icon: 'feather icon-users'
          // },
          {
            id: 'clotureJournée',
            title: 'Cloture de journée',
            type: 'item',
            classes: 'nav-item',
            url: '/clotureJournée',
            icon: 'feather icon-x'
          },
          {
            id: 'charges-societe',
            title: 'Charges société',
            type: 'item',
            classes: 'nav-item',
            url: '/chargesSociete/list',
            icon: 'feather icon-user-plus'
          },
          // {
          //   id: 'ordresVirements',
          //   title: 'Ordres de virements',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/ordresVirements',
          //   icon: 'feather icon-arrow-down-left'
          // },
          // {
          //   id: 'demandesPaiement',
          //   title: 'Demandes de paiement',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/demandesPaiement',
          //   icon: 'feather icon-users'
          // },
          // {
          //   id: 'ordresPaiement',
          //   title: 'Ordres de paiement',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/ordresPaiement',
          //   icon: 'feather icon-trending-down'
          // },
          // {
          //   id: 'gestionChequiers',
          //   title: 'Gestion des chequiers',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/gestionChequiers',
          //   icon: 'feather icon-users'
          // },
          // {
          //   id: 'carnetRecus',
          //   title: 'Carnet des recus',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/carnetRecus',
          //   icon: 'feather icon-file'
          // },
          // {
          //   id: 'MVTInterComptes',
          //   title: 'MVT inter-comptes',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/MVTInterComptes',
          //   icon: 'feather icon-users'
          // },
          // {
          //   id: 'retenueAchat',
          //   title: 'Retenue à la source Achat',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/retenueAchat',
          //   icon: 'feather icon-file-plus'
          // },
          // {
          //   id: 'lettrageVentes',
          //   title: 'Lettrage des ventes',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/lettrageVentes',
          //   icon: 'feather icon-file'
          // },
          // {
          //   id: 'versements',
          //   title: 'Versements',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/versements',
          //   icon: 'feather icon-arrow-down-right'
          // },
          // {
          //   id: 'bordereauRemiseChaques',
          //   title: 'Bordereau remise chéques',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bordereauRemiseChaques',
          //   icon: 'feather icon-file'
          // },
          // {
          //   id: 'bordereauVersements',
          //   title: 'Bordereau de versements',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/bordereauVersements',
          //   icon: 'feather icon-users'
          // },
          {
            id: 'suivieEchanciersClients',
            title: 'Suivie echanciers clients',
            type: 'item',
            classes: 'nav-item',
            url: '/suivieEchanciersClients',
            icon: 'feather icon-shuffle'
          },
          // {
          //   id: 'reglementsImpayés',
          //   title: 'Reglements impayés',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/reglementsImpayés',
          //   icon: 'feather icon-file-minus'
          // },
          {
            id: 'suivieEchanciersFournisseurs',
            title: 'Suivie echanciers fournisseurs',
            type: 'item',
            classes: 'nav-item',
            url: '/suivieEchanciersFournisseurs',
            icon: 'feather icon-shuffle'
          },
          // {
          //   id: 'cautionsBancaires',
          //   title: 'Cautions bancaires',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/cautionsBancaires',
          //   icon: 'feather icon-bar-chart'
          // },
          // {
          //   id: 'alimentationCaisse',
          //   title: 'Alimentation de caisse',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/alimentationCaisse',
          //   icon: 'feather icon-file'
          // },
          // {
          //   id: 'versementsEspece',
          //   title: 'Versements espece',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/versementsEspece',
          //   icon: 'feather icon-arrow-down-right'
          // },
          // {
          //   id: 'transfertCaisse',
          //   title: 'Transfert de caisse',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/transfertCaisse',
          //   icon: 'feather icon-arrow-down'
          // },
          {
            id: 'charges',
            title: 'Coûts directs',
            type: 'item',
            classes: 'nav-item',
            url: '/chargeDirecte/list',
            icon: 'feather icon-user-plus'
          },
          {
            id: 'suiviCaisse',
            title: 'Suivi de caisse',
            type: 'item',
            classes: 'nav-item',
            url: '/sessionCaisses/recherche',
            icon: 'feather icon-log-out'
          },
          {
            id: 'sessionCaisse',
            title: 'session des caisses',
            type: 'item',
            classes: 'nav-item',
            url: '/sessionCaisses/list',
            icon: 'feather icon-log-out'
          },

          {
            id: 'caisses',
            title: 'Caisses',
            type: 'item',
            classes: 'nav-item',
            url: '/caisses',
            icon: 'feather icon-arrow-down-left'
          },
          // {
          //   id: 'interetsBancaire',
          //   title: 'Interets bancaire',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/interetsBancaire',
          //   icon: 'feather icon-file'
          // },
          // {
          //   id: 'gestionAGIO',
          //   title: 'Gestion des AGIO',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/gestionAGIO',
          //   icon: 'feather icon-file-text'
          // },
          // {
          //   id: 'listeAGIO',
          //   title: 'Liste des AGIO',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/listeAGIO',
          //   icon: 'feather icon-file-text'
          // },
          // {
          //   id: 'engagementFournisseurs',
          //   title: 'Engagement fournisseurs',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/engagementFournisseurs',
          //   icon: 'feather icon-user-plus'
          // },
          // {
          //   id: 'engagementLeasing',
          //   title: 'Engagement Leasing',
          //   type: 'item',
          //   classes: 'nav-item',
          //   url: '/engagementLeasing',
          //   icon: 'feather icon-users'
          // },
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b
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
<<<<<<< HEAD
        id: 'energie',
        title: 'Energie',
        type: 'collapse',
        icon: 'feather icon-grid',
        children: [





=======
        id: 'variable',
        title: 'Variable',
        type: 'collapse',
        icon: 'feather icon-grid',
        children: [
          {
            id: 'categories',
            title: 'Categories articles',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/categories/list',
            icon: 'feather icon-command'
          },
          {
            id: 'familles',
            title: 'Familles articles',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/familles/list',
            icon: 'feather icon-grid'
          },
          {
            id: 'sousfamilles',
            title: 'Sous familles articles',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/sousFamilles/list',
            icon: 'feather icon-grid'
          },
          {
            id: 'marques',
            title: 'Marques',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/marque/list',
            icon: 'feather icon-layers'
          },
          {
            id: 'modeles',
            title: 'Modéles',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/modele/list',
            icon: 'feather icon-layers'
          },
          {
            id: 'tauxTVA',
            title: 'Taux TVA',
            type: 'item',
            classes: 'nav-item',
            url: '/parametre/tauxTVA/list',
            icon: 'feather icon-type'
          },
          {
            id: 'frais',
            title: 'Frais',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/frais/list',
            icon: 'feather icon-type'
          } ,
          {
            id: 'role',
            title: 'Type Role',
            type: 'item',
            classes: 'nav-item',
            url: '/role/list',
            icon: 'feather icon-type'
          },
          {
            id: 'uniteMesure',
            title: 'Unité mesure',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/uniteMesure/list',
            icon: 'feather icon-percent'
          },
          {
            id: 'modeReglements',
            title: 'Modes de reglements',
            type: 'item',
            classes: 'nav-item',
            url: '/parametre/modeReglement/list',
            icon: 'feather icon-star-on'
          },
          {
            id: 'modeLivraison',
            title: 'Mode livraison',
            type: 'item',
            classes: 'nav-item',
            url: '/variable/modeLivraison/list',
            icon: 'feather icon-star-on'
          },
          {
            id: 'typeContact',
            title: 'Type Contact',
            type: 'item',
            classes: 'nav-item',
            url: '/typeContact/list',
            icon: 'feather icon-type'
          },
          {
            id: 'typeFournisseurs',
            title: 'Type Fournisseurs',
            type: 'item',
            classes: 'nav-item',
            url: '/typeFournisseur',
            icon: 'feather icon-server'
          },
          {
            id: 'Personnelles',
            title: 'Personnelles',
            type: 'item',
            classes: 'nav-item',
            url: '/personnel/list',
            icon: 'feather icon-users'
          },
          {
            id: 'rolesUtilisateurs',
            title: 'Roles utilisateurs',
            type: 'item',
            classes: 'nav-item',
            url: '/role/list',
            icon: 'feather icon-users'
          },
          {
            id: 'droitsAccèsUtilisateurs',
            title: 'Droits accès utilisateurs',
            type: 'item',
            classes: 'nav-item',
            url: '/utilisateur/list',
            icon: 'feather icon-user-plus'
          },
          {
            id: 'secteurs',
            title: 'Secteurs',
            type: 'item',
            classes: 'nav-item',
            url: '/secteur/list',
            icon: 'feather icon-server'
          },
          {
            id: 'variantes',
            title: 'Variantes',
            type: 'item',
            classes: 'nav-item',
            url: '/variantes',
            icon: 'feather icon-file'
          },
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b
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
<<<<<<< HEAD
        id: 'achats',
        title: 'Achats',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',

=======
        id: 'fichier',
        title: 'AutreFichier',
        type: 'collapse',
        icon: 'feather icon-align-justify',
        children: [
          {
            id: 'BonTravail',
            title: 'Bon Travail',
            type: 'item',
            url: '/bonTravail/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'typeTier',
            title: 'Type Tier',
            type: 'item',
            url: '/typeTier/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'conditionReglement',
            title: 'Condition Reglement',
            type: 'item',
            url: '/conditionReglement',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'statuOpportunite',
            title: 'status Opportunite',
            type: 'item',
            url: '/statuOpportunite',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'projetInterne',
            title: 'Projet interne',
            type: 'item',
            url: '/projetInterne/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Tache ProjetInterne',
            type: 'item',
            url: '/tacheProjetInterne/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'typeCompte',
            title: 'Type Compte',
            type: 'item',
            url: '/typeCompte',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'nomenclature',
            title: 'Nomenclature',
            type: 'item',
            url: '/nomenclature',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'situationReg',
            title: 'Situation Reglement',
            type: 'item',
            url: '/parametre/modeReglement/situationReg',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
        ]
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b
      }]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
<<<<<<< HEAD
        id: 'parametres',
        title: 'Paramètres',
        type: 'collapse',
        icon: 'feather icon-shuffle',





      }]
  },

]
  }]}]
=======
        id: 'gmao',
        title: 'GMAO',
        type: 'collapse',
        icon: 'feather icon-align-justify',
        children: [
          {
            id: 'forms-element',
            title: 'Categorie Machine',
            type: 'item',
            url: '/gmao/categorieMachine',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Modele Machine',
            type: 'item',
            url: '/gmao/modeleMachine',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Marque Machine',
            type: 'item',
            url: '/gmao/marqueMachine',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Operation Preventif',
            type: 'item',
            url: '/gmao/operationPreventif',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Energie',
            type: 'item',
            url: '/gmao/energie',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Machine',
            type: 'item',
            url: '/gmao/machine',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Periodicite',
            type: 'item',
            url: '/gmao/periodicite',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Etat Tache',
            type: 'item',
            url: '/gmao/etatTache',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Plan Preventif',
            type: 'item',
            url: '/gmao/planPreventif/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Tache Preventif',
            type: 'item',
            url: '/gmao/tachePreventif/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Etat Carburant',
            type: 'item',
            url: '/gmao/etatCarburant',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Technicien',
            type: 'item',
            url: '/gmao/technicien/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'ordreMission',
            title: 'Ordre de mission',
            type: 'item',
            classes: 'nav-item',
            url: '/ordreEmission/list',
            icon: 'feather icon-external-link'
          },

          {
            id: 'forms-element',
            title: 'Type Frais',
            type: 'item',
            url: '/gmao/typeFrais/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Mission',
            type: 'item',
            url: '/gmao/missions/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Frais Mission',
            type: 'item',
            url: '/gmao/fraisMission',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Chauffeur',
            type: 'item',
            url: '/gmao/chauffeur/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Vehicule',
            type: 'item',
            url: '/gmao/vehicule',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
          {
            id: 'forms-element',
            title: 'Pointage Compte',
            type: 'item',
            url: '/gmao/pointageCompteur/list',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
        ]
      }]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'comptabilite',
        title: 'Comptabilite',
        type: 'collapse',
        icon: 'feather icon-align-justify',
        children: [
          {
            id: 'forms-element',
            title: 'Classe',
            type: 'item',
            url: '/comptabilite/classe',
            classes: 'nav-item',
            icon: 'feather icon-file-text'
          },
        ]
      }]
  },
  {
    id: 'ui-element',
    title: '',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'administration',
        title: 'Administration',
        type: 'collapse',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'Parametres',
            title: 'Parametres',
            type: 'item',
            classes: 'nav-item',
            url: '/parametresPage',
            icon: 'feather icon-shuffle'
          },
          {
            id: 'exercices',
            title: 'Exercices',
            type: 'item',
            classes: 'nav-item',
            url: '/exercices',
            icon: 'feather icon-file-text'
          },
          {
            id: 'configurationSociétes',
            title: 'Configuration sociétes',
            type: 'item',
            classes: 'nav-item',
            url: '/parametre/societe/list',
            icon: 'feather icon-bar-chart'
          },
            {
             id: 'importation',
             title: 'Importation',
             type: 'item',
             classes: 'nav-item',
             url: '/importation',
             icon: 'feather icon-alert-octagon'
           },
          /*{
            id: 'confTableauBord',
            title: 'Configuration Tableau bord',
            type: 'item',
            classes: 'nav-item',
            url: '/confTableauBord',
            icon: 'feather icon-crop'
          },
          {
            id: 'licence',
            title: 'Licence',
            type: 'item',
            classes: 'nav-item',
            url: '/licence',
            icon: 'feather icon-alert-octagon'
          },*/
        ]
      }
    ]
  },
  // {
  //   id: 'ui-element',
  //   title: 'Client',
  //   type: 'group',
  //   icon: 'feather icon-layers',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Basic',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           type: 'item',
  //           url: '/basic/alert'
  //         },
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumbs & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'cards',
  //           title: 'Cards',
  //           type: 'item',
  //           url: '/basic/cards'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           type: 'item',
  //           url: '/basic/carousel'
  //         },
  //         {
  //           id: 'grid-system',
  //           title: 'Grid System',
  //           type: 'item',
  //           url: '/basic/grid-system'
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           type: 'item',
  //           url: '/basic/progress'
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           type: 'item',
  //           url: '/basic/modal'
  //         },
  //         {
  //           id: 'spinner',
  //           title: 'Spinner',
  //           type: 'item',
  //           url: '/basic/spinner'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         },
  //         {
  //           id: 'tooltip-popovers',
  //           title: 'Tooltip & Popovers',
  //           type: 'item',
  //           url: '/basic/tooltip-popovers'
  //         },
  //         {
  //           id: 'toasts',
  //           title: 'Toasts',
  //           type: 'item',
  //           url: '/basic/toasts'
  //         },
  //         {
  //           id: 'other',
  //           title: 'Other',
  //           type: 'item',
  //           url: '/basic/other'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'bootstrap',
  //       title: 'Liste',
  //       type: 'item',
  //       url: '/tbl-bootstrap/bt-basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },
  // {
  //   id: 'forms',
  //   title: 'Article',
  //   type: 'group',
  //   icon: 'feather icon-layout',
  //   children: [
  //     {
  //       id: 'forms-element',
  //       title: 'Forms',
  //       type: 'item',
  //       url: '/forms/basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     }
  //   ]
  // },
  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'feather icon-file-text',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'Sign up',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'Sign in',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     }
  //   ]
  // }
]

>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b

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
