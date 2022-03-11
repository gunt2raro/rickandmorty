import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { searchReducer } from './libs/search/search.reduce';
import { loaderReducer } from './libs/loader/loader.reduce';
import { GraphqlModule } from './libs/graphql/graphql.module';
import { episodesReducer } from './libs/episodes/episodes.reduce';
import { breadCrumbReducer } from './libs/breadcrumb/breadcrumb.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    GraphqlModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      loading: loaderReducer,
      episodes: episodesReducer,
      searchText: searchReducer,
      breadcrumb: breadCrumbReducer,
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
