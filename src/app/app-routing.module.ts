import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GsUsersComponent } from './dashboard/pages/gs-users/gs-users.component';
import { GsIndividusComponent } from './dashboard/pages/gs-individus/gs-individus.component';
import { GsCasiersComponent } from './dashboard/pages/gs-casiers/gs-casiers.component';
import { ImpressionComponent } from './dashboard/pages/impression/impression.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './services/auth/guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component:LoginComponent, },
  { path: 'dashboard', component:DashboardComponent, canActivate:[GuardGuard]},
  { path: 'gs-services', component:GsUsersComponent, canActivate:[GuardGuard]},
  { path: 'gs-personnels', component:GsIndividusComponent, canActivate:[GuardGuard]},
  { path: 'gs-affectations', component:GsCasiersComponent, canActivate:[GuardGuard]},
  { path: 'impression', component:ImpressionComponent, canActivate:[GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
