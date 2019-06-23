import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ApproutingRoutingModule } from "./approuting/approuting-routing.module";
import { LoadingModule } from "ngx-loading";
import { OwlModule } from "ngx-owl-carousel";
import { NgxCarouselModule } from "ngx-carousel";

import "hammerjs";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchbarComponent } from "./components/home/searchbar/searchbar.component";
import { MovieSliderComponent } from "./components/home/movie-slider/movie-slider.component";
import { TvshowSliderComponent } from "./components/home/tvshow-slider/tvshow-slider.component";
import { MovieDetailComponent } from "./components/home/movie-detail/movie-detail.component";
import { TvShowDetailComponent } from "./components/home/tv-show-detail/tv-show-detail.component";
import { HeaderComponent } from "./components/home/header/header.component";
import { NavbarComponent } from "./components/home/navbar/navbar.component";
import { ApproutingModule } from "./approuting/approuting.module";
import { HomeviewComponent } from "./components/home/homeview/homeview.component";
import { FetchmovielistService } from "./services/movie/fetchmovielist.service";
import { FetchtvshowlistService } from "./services/tvshow/fetchtvshowlist.service";
import { SearchboxServiceService } from "./services/behaviour-subject/searchbox-service.service";
import { RecommendMoviesComponent } from "./components/home/recommend-movies/recommend-movies.component";
import { RecommendTvshowsComponent } from "./components/home/recommend-tvshows/recommend-tvshows.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchbarComponent,
    MovieSliderComponent,
    TvshowSliderComponent,
    MovieDetailComponent,
    TvShowDetailComponent,
    HeaderComponent,
    NavbarComponent,
    HomeviewComponent,
    RecommendMoviesComponent,
    RecommendTvshowsComponent
  ],
  imports: [
    BrowserModule,
    ApproutingRoutingModule,
    HttpClientModule,
    LoadingModule,
    FormsModule,
    OwlModule,
    NgxCarouselModule
  ],
  providers: [
    FetchmovielistService,
    FetchtvshowlistService,
    SearchboxServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
