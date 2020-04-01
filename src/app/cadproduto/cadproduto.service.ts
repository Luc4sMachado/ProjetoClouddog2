import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, Categoria } from './cadproduto';

@Injectable()
export class CadprodutoService{

    constructor(private http: HttpClient){
        
    }

private caminho: string = "http://localhost:3000/produtos";
private caminhocat: string = "http://localhost:3000/categoria";

buscar (id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:3000/produtos${id}`);
}

listarProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.caminho);
}

gravar(produto : Produto): Observable<Produto>{
    return this.http.post<Produto>(this.caminho, produto);
}

// Categoria

buscarcat (id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:3000/categoria${id}`);
}

listarCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.caminhocat);
}

}
