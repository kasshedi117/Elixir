import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { ElixirFacade } from 'src/app/core/+store/+elixir/elixir.facade';
import { Elixir } from 'src/app/core/+store/+elixir/elixir.model';

@Component({
  selector: 'app-elixir-detail',
  templateUrl: './elixir-detail.component.html'
})
export class ElixirDetailComponent implements OnInit {

  elixir!: Elixir;
  loading = true;

  constructor(private route: ActivatedRoute, private elixirFacade: ElixirFacade) { }

  ngOnInit(): void {

    this.elixirFacade.elixirById$(this.route.snapshot.paramMap.get('id')!).pipe(take(1))
      .subscribe({
        next: (elixir) => this.elixir = elixir,
        complete: () => this.loading = false
      })
  }


}
