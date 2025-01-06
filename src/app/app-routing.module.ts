import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderfooterComponent} from "./headerfooter/headerfooter.component";
import {HomeComponent} from "./pages/home/home.component";
import {UsersComponent} from "./pages/users/users.component";
import {RoductsComponent} from "./pages/roducts/roducts.component";
import {LoginComponent} from "./pages/login/login.component";

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
    }
  ]
},
  {path:'login',
  component:LoginComponent},

  { path: '**', redirectTo: 'acceuil' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
