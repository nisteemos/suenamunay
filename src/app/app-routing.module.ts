import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './components/construction/construction.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  //{   path: '', component: IndexComponent  },
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'about-us', loadChildren: () => import('./quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule) },
  {
    path: 'projects', component: ConstructionComponent
  },
  {
    path: 'donations', component: ConstructionComponent
  },
  { path: 'volunteer', loadChildren: () => import('./volunteer/volunteer.module').then(m => m.VolunteerModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {
    path: 'terminos-y-condiciones', component: ConstructionComponent
  },
  {
    path: 'boletines-de-prensa', component: ConstructionComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
