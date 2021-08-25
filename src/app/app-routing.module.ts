import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nested-two',
    loadChildren: () => import('MfeTwo/NestedTwoModule').then(m => m.NestedTwoModule)
  },
  {
    path: 'nested-nested-two',
    loadChildren: () => import('MfeTwo/NestedNestedTwoModule').then(m => m.NestedNestedTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
