import { Component, OnInit } from '@angular/core';
import { Produto } from './listaproduto';

import { ListaprodutoService } from './listarproduto.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(public service: ListaprodutoService, private router : Router, private route: ActivatedRoute) {
    
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

  deleteProdutos(produto:Produto){
    this.service.deleteProdutos(produto).subscribe(() =>{
      this.service.buscar(this.codigo);
      window.location.reload();
    })

    
  }

  onEdit(id){
    this.router.navigate(['editar', id]);
  }

 

}
