import { NgModule } from '@angular/core';
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [  // makes it accessible from other modules
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule { }
