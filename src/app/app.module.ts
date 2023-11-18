import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { FormsUserComponent } from './components/forms-user/forms-user.component';
import { SortPipe } from './pipes/sort.pipe';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeComponent } from './components/theme/theme.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductComponent } from './components/product/product.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    FormsUserComponent,
    SortPipe,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent,
    UserRegisterComponent,
    AuthUserComponent,
    ProductCartComponent,
    ProductComponent,
    UsersListComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
