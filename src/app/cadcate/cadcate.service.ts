import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './cadcate';
@Injectable()
export class CadcateService{

    constructor(private http: HttpClient){
        
    }
    private caminho: string = "http://localhost:3000/categoria";

     
    buscarcat (id: number): Observable<Categoria>{
        return this.http.get<Categoria>(`http://localhost:3000/categoria${id}`);
    }
    
    listarcat():Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.caminho);
    }
    
    gravarcat(categoria :Categoria): Observable<Categoria>{
        return this.http.post<Categoria>(this.caminho, categoria);
    }
}