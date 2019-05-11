import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssSettingComponent } from './css-setting/css-setting.component';
import { HomeComponent } from './home/home.component';
import { Product1Component } from './product1/product1.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {  path : '' , redirectTo : '/home' , pathMatch : 'full'},
  {  path : 'cssSetting' , component: CssSettingComponent},
  {  path : 'home' , component: HomeComponent},
  {  path : 'product1' , component: Product1Component},
  {  path : 'productDetails' , component: ProductDetailsComponent},
  {  path : 'footer' , component: FooterComponent},
  {  path : 'header' , component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
