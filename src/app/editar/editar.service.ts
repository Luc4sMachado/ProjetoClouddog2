import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Produto, Categoria } from './editar';
import { catchError, tap, map } from 'rxjs/operators';
import { NumberValueAccessor } from '@angular/forms';

@Injectable()
export class EditarService{

    constructor(private http: HttpClient){
        
    }
    httpOptions ={
        headers: new HttpHeaders ({'Contenr-Type': 'application/json'})
    }

private caminho: string = "http://localhost:3000/produtos";
private caminhocat: string = "http://localhost:3000/categoria";

//editar

updateProduto(id, produto): Observable<any> {
    const url = `${this.caminho}/${id}`;
    return this.http.put(url, produto, this.httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }


  getProduto(id: number): Observable<Produto> {
      const url = `${this.caminho}/${id}`;
      return this.http.get<Produto>(url).pipe(
          tap(res => console.log(`leu o produto id=${id}`)),
          catchError(this.handleError<Produto>(`getProduto id=${id}`))
      );
  }
  

// Categoria

buscarcat (id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:3000/categoria${id}`);
}

listarCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.caminhocat);
}



}
