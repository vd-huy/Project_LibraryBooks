import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'listlibrarys', loadChildren: () => import('./pages/librarys/librarys.module').then(m => m.LibrarysModule) },
  { path: 'listbooks', loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule) },

  {path: "**", redirectTo:"welcome"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
