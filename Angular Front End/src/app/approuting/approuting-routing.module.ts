import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";
import { HomeComponent } from "../components/home/home.component";
import { HomeviewComponent } from "../components/home/homeview/homeview.component";
import { MovieDetailComponent } from "../components/home/movie-detail/movie-detail.component";
import { TvShowDetailComponent } from "../components/home/tv-show-detail/tv-show-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "app", pathMatch: "full" },
      { path: "app", component: HomeviewComponent },
      { path: "movie/:movieId", component: MovieDetailComponent },
      { path: "tvshow/:tvShowId", component: TvShowDetailComponent }
      // { path: "**", redirectTo: "app" }
    ]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApproutingRoutingModule {}
