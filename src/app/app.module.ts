import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Api } from './services/cartServices.service';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
