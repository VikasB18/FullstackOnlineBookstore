import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { UsersComponent } from './admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [ 

   { path: 'login', component: LoginComponent},
{ path: 'shop', component: ShopbookComponent,canActivate:[AuthGaurdService] },
{ path: 'admin/users', component: UsersComponent, canActivate:[AuthGaurdService] }, 
 { path: 'admin/books', component: BooksComponent, canActivate:[AuthGaurdService] },
 { path: 'cart', component: CartComponent,canActivate:[AuthGaurdService] },
 { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
 { path: '', redirectTo: '/login', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
