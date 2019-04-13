import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './IOFeature/parent/parent.component';
import { ChildComponent } from './IOFeature/child/child.component';


const routes: Routes = [
  // { path: 'home', component: AppComponent},
  { path: 'parent', component:ParentComponent},
  { path: 'child', component:ChildComponent},
  { path: '', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
