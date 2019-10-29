import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'book-list' },
  { path: 'create-book', component: BookCreateComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'update-book/:id', component: BookUpdateComponent },
  { path: 'book-list', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentList = [BookCreateComponent, BookDetailsComponent, BookUpdateComponent, BookListComponent];
