import { Component, OnInit } from '@angular/core';
import { Produto } from './listaproduto';

import { ListaprodutoService } from './listarproduto.service';

@Component({
  selector: 'app-listarproduto',
  templateUrl: './listarproduto.component.html',
  styleUrls: ['./listarproduto.component.css']
})
export class ListarprodutoComponent implements OnInit {

  produto:Produto;
  codigo:number=0;
  produtos:Produto[]=[];
  produtoCodigo: Produto;

  constructor(public service: ListaprodutoService) {
    
    this.produtoCodigo=new Produto();
    this.codigo =0;
    this.produto= new Produto();
  }
  ngOnInit(): void {
    this.carregarProdutos();
  }

  public carregarProdutos(){
    return this.service.listarProdutos().subscribe(res=>{this.produtos=res;})
    
  }

  public buscarcodigo(){
    this.service.buscar(this.codigo).subscribe(res=>(this.produtoCodigo=res))
  }

  public salvar(){
    this.service.gravar(this.produto).subscribe(res=>(console.log('Produto Gravado ...')));
    
  }
}
