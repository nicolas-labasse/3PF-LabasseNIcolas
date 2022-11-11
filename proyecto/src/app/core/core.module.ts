import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';




@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    ToolbarComponent,
    CoreRoutingModule
  ]
})
export class CoreModule { }
