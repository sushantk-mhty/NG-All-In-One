import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeComponent } from './components/theme/theme.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';

const routes: Routes = [
  {path:'',component:CardComponent},
  {path:'card',component:CardComponent},
  {path:'product',component:ProductItemComponent},
  {path:'shopping',component:ShoppingCartComponent},
  {path:'formuser',component:FormsUserComponent},
  {path:'sms',component:SmsAppComponent},
  {path:'show',component:ShowPasswordComponent},
  {path:'amount',component:AmountRangeComponent},
  {path:'theme',component:ThemeComponent},
  {path:'userregistration',component:UserRegisterComponent},
  {path:'authuser',component:AuthUserComponent},
  {path:'productcart',component:ProductCartComponent},
  {path:'userslist',component:UsersListComponent},
  {path:'contact',component:ContactAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
