import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesFormComponent } from './pages/features-form/features-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsFormComponent } from './pages/news-form/news-form.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    MenuComponent,
    HomeComponent,
    NewsFormComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
