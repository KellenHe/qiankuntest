import { NgModule } from '@angular/core';
import { QiankunRoutingModule } from './qiankun-routing.module';

// user pages
import { ReactContainerComponent } from './react-container.component';

const COMPONENTS = [
  ReactContainerComponent
];

@NgModule({
  imports: [QiankunRoutingModule],
  declarations: [
    ...COMPONENTS
  ]
})
export class QiankunModule { }
