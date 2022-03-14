import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { JungleComponent } from './animals/jungle/jungle.component'
import { ZooComponent } from './animals/zoo/zoo.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'game', component: JungleComponent},
  {path: 'zoo', component: ZooComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
