import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';

import{FormsModule} from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';

import {MatListModule} from '@angular/material/list';

import {MatButtonModule} from '@angular/material/button';

import {MatDialogModule} from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import { CadcateComponent } from './cadcate/cadcate.component';
import {MatInputModule} from '@angular/material/input';
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { ListarprodutoComponent } from './listarproduto/listarproduto.component';

import {MatTableModule} from '@angular/material/table';

import{HttpClientModule} from '@angular/common/http';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto/produto.service';
import{CadprodutoService} from './cadproduto/cadproduto.service';
import{ListaprodutoService} from './listarproduto/listarproduto.service';


@NgModule({
  declarations: [
    AppComponent,
    CadcateComponent,
    CadprodutoComponent,
    ListarprodutoComponent,
    ProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
    CadprodutoService,
    ListaprodutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
