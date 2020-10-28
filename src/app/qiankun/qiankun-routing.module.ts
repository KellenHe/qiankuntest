import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// react app pages
import { ReactContainerComponent } from './react-container.component';

const routes: Routes = [
  { path: '', component: ReactContainerComponent, data: { title: '用户管理' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QiankunRoutingModule { }
