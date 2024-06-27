import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: LoadingScreenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown path to the loading screen
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
