import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAppState from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ElixirEffects } from './+store/+elixir/elixir.effects';
import { environment } from 'src/environments/environment.development';

const MODULES_WITH_PROVIDER: any = [
	
]

const MODULES_FOR_ROUTE = [
  EffectsModule.forRoot([
    ElixirEffects
  ]),
  StoreModule.forRoot(fromAppState.reducers),
	StoreDevtoolsModule.instrument({
		maxAge: 100,
		logOnly: environment.production,
	}),
];

const MODULES = [
  StoreModule,
	StoreDevtoolsModule,
];

@NgModule({
  imports: [...MODULES_FOR_ROUTE],
	exports: [...MODULES],
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				`${parentModule} has already been loaded. Import Core modules in the AppModule only!`
			);
		}
	}
	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [...MODULES_WITH_PROVIDER],
		};
	}
}
