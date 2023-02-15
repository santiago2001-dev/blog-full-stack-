import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { NoPagueNoFoundComponent } from './no-pague-no-found/no-pague-no-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component : NoPagueNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
      PagesRoutingModule,
      AuthRoutingModule,
      HomeRoutingModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
