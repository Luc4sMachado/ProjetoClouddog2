import { Component, OnInit } from '@angular/core';
import { Categoria } from '../cadproduto/cadproduto';
import {CadcateService} from '../cadcate/cadcate.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-cadcate',
  templateUrl: './cadcate.component.html',
  styleUrls: ['./cadcate.component.css']
})
export class CadcateComponent implements OnInit {
  
  
  categoria : Categoria;
  codigo : number=0;
  categorias : Categoria[] = [];
  constructor(public service : CadcateService) {
    this.codigo =0;
    this.categoria = new Categoria();
   }

  ngOnInit(): void {
  }

  public salvarcate(){
    this.service.gravarcat(this.categoria).subscribe(res=>{console.log('Produto Gravado ...')});
    window.location.reload();
  }
  public alerta(){
    alert("Categoria Cadastrada");
  }

  


}

