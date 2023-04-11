import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElixirRoutingModule } from './elixir-routing.module';
import { ElixirListComponent } from './elixir-list/elixir-list.component';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';
import { ElixirListItemComponent } from './elixir-list/elixir-list-item/elixir-list-item.component';
import { SharedModule } from '../shared/shared.module';

const SHARED = [CommonModule,
  ElixirRoutingModule, SharedModule]

const COMPONENT = [ElixirListComponent,
  ElixirDetailComponent, ElixirListItemComponent]

@NgModule({
  declarations: [
    ...COMPONENT
  ],
  imports: [
    ...SHARED
  ]
})
export class ElixirModule { }
