import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';

import { LoginService } from './login.service';
import { SessionService } from './session.service';
import { ProductService } from './product.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductCatalogComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    SessionService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
