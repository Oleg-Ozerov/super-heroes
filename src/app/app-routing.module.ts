import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationPageComponent} from './registration-page/registration-page.component';
import {HeroSelectionPageComponent} from './hero-selection-page/hero-selection-page.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UserHeroesListComponent} from './user-info/tabs/user-heroes-list/user-heroes-list.component';
import {UserHistoryComponent} from './user-info/tabs/user-history/user-history.component';
import {UserPowerupsComponent} from './user-info/tabs/user-powerups/user-powerups.component';
import {HeroInfoComponent} from './hero-info/hero-info.component';
import {BattlePageComponent} from './battle-page/battle-page.component';
import {AuthGuard} from './shared/auth-guard';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'hero-info', component: HeroInfoComponent, children: [
          {path: ':id', component: HeroInfoComponent}
        ]},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationPageComponent},
      {path: 'hero-selection', component: HeroSelectionPageComponent, canActivate: [AuthGuard]},
      {path: 'fight', component: BattlePageComponent},
      {path: 'profile', component: UserInfoComponent, children: [
          {path: '', redirectTo: 'heroes-list', pathMatch: 'full'},
          {path: 'heroes-list', component: UserHeroesListComponent},
          {path: 'history', component: UserHistoryComponent},
          {path: 'powerups', component: UserPowerupsComponent}
          ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
