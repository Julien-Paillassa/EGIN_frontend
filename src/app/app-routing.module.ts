import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardEditComponent } from './board/board-edit/board-edit.component';
import { SpotEditComponent } from './spot/spot-edit/spot-edit.component';
import { BoardFormComponent } from './board/board-form/board-form.component';
import { SpotFormComponent } from './spot/spot-form/spot-form.component';
import { HomeComponent } from './home/home.component';
import { SpotDetailComponent } from './spot/spot-detail/spot-detail.component';
import { SpotListComponent } from './spot/spot-list/spot-list.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ProfilComponent } from './user/profil/profil.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { CheckoutComponent } from './payment/checkout/checkout.component';
import { SuccessComponent } from './payment/success/success.component';
import { CancelComponent } from './payment/cancel/cancel.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'profil', component: ProfilComponent},
  { path: 'boards', component: BoardListComponent },
  { path: 'boards/new', component: BoardFormComponent },
  { path: 'boards/:id', component: BoardDetailComponent },
  { path: 'boards/edit/:id', component: BoardEditComponent },
  { path: 'spots', component: SpotListComponent },
  { path: 'spots/new', component: SpotFormComponent },
  { path: 'spots/:id', component: SpotDetailComponent },
  { path: 'spots/edit/:id', component: SpotEditComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'cancel', component: CancelComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
