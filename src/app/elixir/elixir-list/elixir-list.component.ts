import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subject, debounceTime, startWith } from 'rxjs';
import { ElixirFacade } from 'src/app/core/+store/+elixir/elixir.facade';

@UntilDestroy()
@Component({
  selector: 'app-elixir-list',
  templateUrl: './elixir-list.component.html'
})
export class ElixirListComponent implements OnInit {
  loading$ = this.elixirFacade.elixirAllLoading$;
  elixirList$ = this.elixirFacade.elixirs$;
  searchSubject$: Subject<void> = new Subject();
  searchText = '';

  constructor(private elixirFacade: ElixirFacade){}

  ngOnInit(): void {
    this.searchSubject$.pipe(startWith(''), debounceTime(1000),untilDestroyed(this) ).subscribe(() => 
    this.elixirFacade.loadElixir(this.searchText))
  }
}
