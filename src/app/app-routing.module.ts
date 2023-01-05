import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardEditComponent } from './edit/board-edit/board-edit.component';
import { BoardFormComponent } from './form/board-form/board-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'boards', component: BoardListComponent },
  { path: 'boards/:id', component: BoardDetailComponent },
  { path: 'boardForm', component: BoardFormComponent },
  { path: 'boards/edit/:id', component: BoardEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
