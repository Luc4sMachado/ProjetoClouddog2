import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {MatSelectModule} from '@angular/material/select';
import{HttpClientModule} from '@angular/common/http';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto/produto.service';
import{CadprodutoService} from './cadproduto/cadproduto.service';
import{ListaprodutoService} from './listarproduto/listarproduto.service';
import { CadcateService } from './cadcate/cadcate.service';
import { EditarComponent } from './editar/editar.component';
import { EditarService } from './editar/editar.service';


@NgModule({
  declarations: [
    AppComponent,
    CadcateComponent,
    CadprodutoComponent,
    ListarprodutoComponent,
    ProdutoComponent,
    EditarComponent,
    
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
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutoService,
    CadprodutoService,
    ListaprodutoService,
    CadcateService,
    EditarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
