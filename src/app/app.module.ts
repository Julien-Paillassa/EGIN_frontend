import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardComponent } from './board/board/board.component';
import { CardComponent } from './components/card/card/card.component';
import { CardListComponent } from './components/card/card-list/card-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardFormComponent } from './form/board-form/board-form.component';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { BoardEditComponent } from './edit/board-edit/board-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardListComponent,
    BoardComponent,
    CardComponent,
    CardListComponent,
    HeaderComponent,
    FooterComponent,
    BoardFormComponent,
    BoardDetailComponent,
    BoardEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
