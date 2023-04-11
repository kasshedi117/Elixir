import { ActionReducerMap } from '@ngrx/store';
import * as fromElixir from './+elixir/elixir.reducer';

export interface AppState {
	[fromElixir.elixirFeatureKey]: fromElixir.State;
}

export const reducers: ActionReducerMap<AppState> = {
	[fromElixir.elixirFeatureKey]: fromElixir.elixirReducer,
};
