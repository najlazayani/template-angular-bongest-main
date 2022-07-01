import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { SuperAdminComponent } from './theme/layout/super-admin/super-admin.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-admin',
    component: SuperAdminComponent,
    children: [

    ]
  },

  {
    path: '',
    component: AdminComponent,
    children: [


      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
      },
      {
        path: 'layout',
        loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
      },
      {
        path: 'tbl-bootstrap',
        loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      },



      {
        path: 'transporteur',
        loadChildren: () => import('./comerce/transporteur/transporteur.module').then(module => module.TransporteurModule)
      },

        {
        path: 'type-departement',
       loadChildren: () => import('./components/type-departement/type-departement.module').then(module => module.TypeDepartementModule)
       },

      {
        path: 'importations',
        loadChildren: () => import('./importations-page/importations-page.module').then(module => module.ImportationsPageModule)
      },


      /************************* Partie GMAO ****************************** */


      /************************* Partie Comptabilite ****************************** */


    ]
  },

  {
    path: '**',
    redirectTo: 'authentication/page-inaccessible',
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
