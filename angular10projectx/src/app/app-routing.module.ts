import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LikeDeslikeComponent } from './like-deslike/like-deslike.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';
import { UsehooksComponent } from './usehooks/usehooks.component';

const routes: Routes = [
  {path :"",component:LikeDeslikeComponent},
{path:'likeDesLike',component:SecondComponent},
{path:'hooks',component:UsehooksComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
