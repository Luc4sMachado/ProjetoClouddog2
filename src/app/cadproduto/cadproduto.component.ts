import { Component, OnInit } from '@angular/core';
import { Produto } from './cadproduto';
import { CadprodutoService } from './cadproduto.service';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {

  produto:Produto;
  codigo:number=0;
  produtos:Produto[]=[];
  produtoCodigo: Produto;

  constructor(public service: CadprodutoService) {
    
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
    this.service.gravar(this.produto).subscribe(res=>{console.log('Produto Gravado ...')});
  }
  public alerta(){
    alert("Produto Cadastrado");
  }
}
