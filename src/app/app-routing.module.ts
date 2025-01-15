import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderfooterComponent} from "./headerfooter/headerfooter.component";
import {HomeComponent} from "./pages/home/home.component";
import {UsersComponent} from "./pages/users/users.component";
import {RoductsComponent} from "./pages/roducts/roducts.component";
import {LoginComponent} from "./pages/login/login.component";
import {ModalComponent} from "./pages/modal/modal.component";
import {AjoutproduitComponent} from "./pages/ajoutproduit/ajoutproduit.component";
import {ProduitsComponent} from "./pages/produits/produits.component";

const routes: Routes = [ { path:'acceuil',
  component : HeaderfooterComponent,
  children:[
    {
      path:'',
      component: HomeComponent
    },
    {
      path:'users',
      component: UsersComponent
    },
    {
      path:'products',
      component: RoductsComponent
    },
    { path:'ajoutproduit',
      component : AjoutproduitComponent},
    { path:'produits',
      component : ProduitsComponent},

  ]
},
  {path:'login',
  component:LoginComponent},
  {path:'modal',
    component:ModalComponent},

  { path: '**', redirectTo: 'acceuil' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
