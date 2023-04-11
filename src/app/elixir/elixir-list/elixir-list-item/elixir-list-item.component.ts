import { Component, Input } from '@angular/core';
import { Elixir } from 'src/app/core/+store/+elixir/elixir.model';

@Component({
  selector: 'app-elixir-list-item',
  templateUrl: './elixir-list-item.component.html'
})
export class ElixirListItemComponent {

  @Input() elixir!:Elixir;

}
