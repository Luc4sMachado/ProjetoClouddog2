import { Component, OnInit } from '@angular/core';
import { Produto, Categoria } from './editar';
import { EditarService } from './editar.service';
import { ActivatedRoute } from '@angular/router';
import { Form, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  produto:Produto;
  codigo:number=0;
  produtos:Produto[]=[];
  produtoCodigo: Produto;
  categoria : Categoria;
  codigocat : number=0;
  categorias : Categoria[] = [];
  form : Form;
  id: number = null;
  productForm: FormGroup;
  titulo: String = "";
  desc: String = "";
  preco: number = null;
  cat: String = "";
  isLoadingResults = false;

  constructor(public service: EditarService, private route: ActivatedRoute, private api: EditarService, private formbuilder: FormBuilder) {
    this.produtoCodigo=new Produto();
    this.codigo =0;
    this.produto= new Produto();
    this.codigocat =0;
    this.categoria = new Categoria();
    
   }

   onSubmit(form){
     console.log(form)
   }

   editProduto(produto: Produto){
     this.produto = {... produto};
   }

  ngOnInit(): void {

    

    
    this.carregarCategoria();
    this.getProduto(this.route.snapshot.params['id']);
    this.productForm = this.formbuilder.group({
      titulo : [null, Validators.required],
      valor : [null, Validators.required],
      categoria : [null, Validators.required],
      descricao : [null, Validators.required]
    });

    
  }

  updateProduto(form: NgForm){
    alert('Produto Atualizado');
    this.isLoadingResults = true;
    this.api.updateProduto(this.id, form)
    .subscribe(form =>{
      this.isLoadingResults = false;
    }, (err) =>{
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  getProduto(id){
    this.api.getProduto(id).subscribe(produto => {
      this.id = produto.id;
      this.productForm.setValue({
        titulo: produto.titulo,
        valor: produto.valor,
        categoria: produto.categoria,
        descricao: produto.descricao,

      })
    })
  }


  public carregarCategoria(){
    return this.service.listarCategoria().subscribe(res=>{this.categorias=res;})
  } 

  
  
}
