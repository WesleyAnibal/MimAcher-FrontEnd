import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchObjectComponent } from './search-object/search-object.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';


const routes: Routes = [{
  path: '',
  component: HomePageComponent,
  canActivate: [],
  children: [ 
    { path: '', component: DashboardComponent},
    {
      path: 'cadastro/:typeCadastro',
      component: CadastroFormComponent,
      data: {},
      canActivate: []
    },
    {
      path: 'pesquisa/:typeCadastro',
      component: SearchObjectComponent,
      data: {},
      canActivate: []
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
