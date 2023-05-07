import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesFormComponent } from './pages/features-form/features-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsFormComponent } from './pages/news-form/news-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'features', component: FeaturesFormComponent },
  { path: 'register', component: RegisterFormComponent},
  { path: 'login', component: LoginFormComponent },
  { path: 'news/create', component: NewsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
