import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './listaproduto';
import { Router } from '@angular/router';

@Injectable()
export class ListaprodutoService{
    

    constructor(private http: HttpClient){

    }

    httpOptions ={
        headers: new HttpHeaders ({'Contenr-Type': 'application/json'})
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

deleteProdutos(produto: Produto){
    return this.http.delete<Produto>(this.caminho +'/'+produto.id, this.httpOptions)
}

}