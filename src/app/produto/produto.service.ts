import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){

    }

private caminho: string = "http://localhost:3000/produtos";

buscar (id: number): Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:3000/produtos/${id}`);
}

listarProdutos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.caminho);
}

gravar(produto : Produto): Observable<Produto>{
    return this.http.post<Produto>(this.caminho, produto);
}

}