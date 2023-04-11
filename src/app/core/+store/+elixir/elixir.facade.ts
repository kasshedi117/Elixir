import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElixirSelectors } from './elixir.selectors';
import { Elixir } from './elixir.model';
import { ElixirAction } from './elixir.action';

@Injectable({
	providedIn: 'root',
})
export class ElixirFacade {
	constructor(private store: Store) { }

	elixirs$ = this.store.select(ElixirSelectors.selectAll);
	elixirAllLoading$ = this.store.select(ElixirSelectors.selectAllLoadingElixir);
	elixirAllError$ = this.store.select(ElixirSelectors.selectAllErrorElixir);

	elixirById$(id: string): Observable<Elixir> {
		return this.store.select(ElixirSelectors.selectById(id));
	}

	loadElixir(name:string):void{
		this.store.dispatch(ElixirAction.loadElixirs({name}))
	}
}
