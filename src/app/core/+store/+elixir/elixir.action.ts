import { createAction, props } from '@ngrx/store';
import { Elixir } from './elixir.model';

const loadElixirs = createAction('[Elixir/API] Load Elixir',
  props<{ name: string }>()
);

const loadElixirSuccess = createAction(
  '[Elixir/API] Load Elixir Success',
  props<{ elixirs: Elixir[] }>()
);

const loadElixirError = createAction(
  '[Elixir/API] Load Elixir Error',
  props<{ error: any }>()
);

export const ElixirAction = {
  loadElixirs,
  loadElixirSuccess,
  loadElixirError
}