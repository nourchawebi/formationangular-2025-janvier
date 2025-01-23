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
import {DetailsproduitsComponent} from "./pages/detailsproduits/detailsproduits.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {UnothorizedComponent} from "./pages/unothorized/unothorized.component";
import {authGuard, authGuardadmin} from "./services/auth.guard";

const routes: Routes = [ { path:'acceuil',
  component : HeaderfooterComponent,
  children:[
    {
      path:'',
      component: HomeComponent,
    // canActivate:[authGuard]
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
      component : AjoutproduitComponent,
      canActivate:[authGuard]},

    { path:'produits',
      component : ProduitsComponent,
      canActivate:[authGuard]},
    { path: 'produit/:id', component:DetailsproduitsComponent,
      canActivate:[authGuard]},

  ]
},
  {path:'login',
  component:LoginComponent},
  {path:'admin',
    component:AdminComponent,
    canActivate:[authGuardadmin]

  },
  {path:'unauthorized',
    component:UnothorizedComponent},

  {path:'modal',
    component:ModalComponent},

  { path: '**', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
