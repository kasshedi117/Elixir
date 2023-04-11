import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElixirListComponent } from './elixir-list/elixir-list.component';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';
import { PreviousUrlGuard } from '../core/guards/previous-url.guard';

const routes: Routes = [
  {
		path: '',
		component: ElixirListComponent,
	},
	{
		path: ':id',
		component: ElixirDetailComponent,
		canActivate: [PreviousUrlGuard],
		data: { previousRoute: '' },
		runGuardsAndResolvers: 'always',
	},
  {
		path: '**',
		redirectTo: '',
		pathMatch: 'full',
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElixirRoutingModule { }
