import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwapComponent } from './swap/swap.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'swap-component', component: SwapComponent },
  { path: '', redirectTo: '/swap-component', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
