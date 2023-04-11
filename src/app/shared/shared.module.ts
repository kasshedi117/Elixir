import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components';
import { FormsModule } from '@angular/forms';

const MODULES = [CommonModule, FormsModule]
const COMPONENTS = [SpinnerComponent]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule { }
