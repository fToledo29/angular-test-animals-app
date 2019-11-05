import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { JungleComponent } from './animals/jungle.component/jungle.component'

const routes: Routes = [
  {path: '', component: EmptyComponent},
  {path: 'game', component: JungleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
