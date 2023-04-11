import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ElixirAction } from './elixir.action';
import { ElixirService } from '../../services/elixir.service';

@Injectable()
export class ElixirEffects {
  constructor(
    private actions$: Actions,
    private elixirService: ElixirService
  ) { }

  loadElixirAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ElixirAction.loadElixirs),
      exhaustMap((action) =>
        this.elixirService.getAllElixir(action.name).pipe(
          map((response) =>
            ElixirAction.loadElixirSuccess({
              elixirs: response,
            }),
          ),
          catchError((e) =>
            of(ElixirAction.loadElixirError({ error: e }))
          )
        )
      )
    )
  );
}
