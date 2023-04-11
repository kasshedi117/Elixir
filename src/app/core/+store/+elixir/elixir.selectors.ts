import { createFeatureSelector, createSelector } from "@ngrx/store";
import { elixirFeatureKey, adapter, State } from "./elixir.reducer";


export const selectFeature = createFeatureSelector<State>(elixirFeatureKey);

const { selectEntities, selectAll } =
	adapter.getSelectors(selectFeature);

const selectById = (id: string) => createSelector(selectEntities, (entities) => entities[id]!);

const selectAllLoadingElixir = createSelector(
	selectFeature,
	(state) => state.loading
);

const selectAllErrorElixir = createSelector(
	selectFeature,
	(state) => state.error
);

export const ElixirSelectors = {
	selectAll,
	selectById,
	selectAllLoadingElixir,
	selectAllErrorElixir
};
