import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HeroSelectionPageComponent } from './hero-selection-page/hero-selection-page.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { AlphabeticalSearchComponent } from './alphabetical-search/alphabetical-search.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserHeroesListComponent } from './user-info/tabs/user-heroes-list/user-heroes-list.component';
import { UserHistoryComponent } from './user-info/tabs/user-history/user-history.component';
import { UserPowerupsComponent } from './user-info/tabs/user-powerups/user-powerups.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    HeroSelectionPageComponent,
    HeroListComponent,
    HeroComponent,
    AlphabeticalSearchComponent,
    UserInfoComponent,
    UserHeroesListComponent,
    UserHistoryComponent,
    UserPowerupsComponent,
    HeroInfoComponent,
    BattlePageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
