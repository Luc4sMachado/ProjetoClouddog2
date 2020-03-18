import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto:Produto;
  codigo:number=0;
  produtos:Produto[]=[];
  produtoCodigo: Produto;

  constructor(public service: ProdutoService) {
    
    this.produtoCodigo=new Produto();
    this.codigo =0;
    this.produto= new Produto();
  }
  ngOnInit(): void {
    this.carregarProdutos();
  }

  public carregarProdutos(){
    return this.service.listarProdutos().subscribe(res=>{this.produtos=res;})
    this.carregarProdutos();
  }

  public buscarcodigo(){
    this.service.buscar(this.codigo).subscribe(res=>(this.produtoCodigo=res))
  }

  public salvar(){
    this.service.gravar(this.produto).subscribe(res=>(console.log('Produto Gravado ...')));
  }
}