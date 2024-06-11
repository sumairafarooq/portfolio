import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown path to the loading screen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
