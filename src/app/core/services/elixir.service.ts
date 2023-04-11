import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elixir } from '../+store/+elixir/elixir.model';

@Injectable({
  providedIn: 'root'
})
export class ElixirService {

  constructor(private http: HttpClient) { }

  getAllElixir(name: string): Observable<Elixir[]>{
    return this.http.get<Elixir[]>('https://wizard-world-api.herokuapp.com/Elixirs', {params: {name}}, ); 
  }

  getElixirById(id: string): Observable<Elixir>{
    return this.http.get<Elixir>('https://wizard-world-api.herokuapp.com/Elixirs/'+id); 
  }
}
