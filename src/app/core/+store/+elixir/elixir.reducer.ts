import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Elixir } from './elixir.model';
import { ElixirAction } from './elixir.action';

export const elixirFeatureKey = 'Elixir'


export interface State extends EntityState<Elixir> {
	loading: boolean;
	error?: any;
}

export const adapter: EntityAdapter<Elixir> = createEntityAdapter<Elixir>({
	selectId: (elixir:Elixir) => elixir.id,
});

export const initialState: State = adapter.getInitialState({
	loading: false,
})

export const elixirReducer = createReducer(
	initialState,
	on(ElixirAction.loadElixirs, (state) => ({ ...state, loading: true })),
	on(ElixirAction.loadElixirSuccess, (state, action) =>
		adapter.setAll(action.elixirs, {
			...state,
			loading: false,
			error: undefined
		})
	),
	on(ElixirAction.loadElixirError, (state, action) => ({ ...state, error: action.error, loading: false })),
);

