import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { CardComponent } from './components/card/card/card.component';
import { CardListComponent } from './components/card/card-list/card-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardFormComponent } from './board/board-form/board-form.component';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { BoardEditComponent } from './board/board-edit/board-edit.component';
import { SpotDetailComponent } from './spot/spot-detail/spot-detail.component';
import { SpotListComponent } from './spot/spot-list/spot-list.component';
import { SpotEditComponent } from './spot/spot-edit/spot-edit.component';
import { SpotFormComponent } from './spot/spot-form/spot-form.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ProfilComponent } from './user/profil/profil.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PaymentComponent } from './payment/payment/payment.component';
import { SuccessComponent } from './payment/success/success.component';
import { CancelComponent } from './payment/cancel/cancel.component';
import { CheckoutComponent } from './payment/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardListComponent,
    CardComponent,
    CardListComponent,
    HeaderComponent,
    FooterComponent,
    BoardFormComponent,
    BoardDetailComponent,
    BoardEditComponent,
    SpotDetailComponent,
    SpotListComponent,
    SpotEditComponent,
    SpotFormComponent,
    LoginComponent,
    LogoutComponent,
    ProfilComponent,
    PaymentComponent,
    SuccessComponent,
    CancelComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('jwt')
      }
    }),
  ],
  providers: [
    HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
