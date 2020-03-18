import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{CadcateComponent} from './cadcate/cadcate.component';
import{CadprodutoComponent} from './cadproduto/cadproduto.component';
import {ListarprodutoComponent} from './listarproduto/listarproduto.component';



const routes: Routes = [
  {path: 'cadcate', component: CadcateComponent  },
  {path: 'cadproduto', component: CadprodutoComponent},
  {path: 'listarproduto', component: ListarprodutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
