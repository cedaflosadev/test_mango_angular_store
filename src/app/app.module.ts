import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, StoreModule } from '@ngrx/store'
// import { postReducer } from './store/reducers/post.reducer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DetailsPokemonComponent } from './shared/components/details-pokemon/details-pokemon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    DetailsPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatExpansionModule,
    // StoreModule.forRoot({ post: postReducer } as ActionReducerMap<any, any>),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
