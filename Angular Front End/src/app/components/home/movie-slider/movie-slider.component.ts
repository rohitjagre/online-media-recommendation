import { Component, OnInit } from "@angular/core";
import { FetchmovielistService } from "../../../services/movie/fetchmovielist.service";
import { error } from "selenium-webdriver";
import { Movie } from "../../../models/movie";
import { SearchboxServiceService } from "../../../services/behaviour-subject/searchbox-service.service";

@Component({
  selector: "app-movie-slider",
  templateUrl: "./movie-slider.component.html",
  styleUrls: ["./movie-slider.component.css"]
})
export class MovieSliderComponent implements OnInit {
  loading: boolean = false;
  movieList: Movie[];
  isFetchDataComplete: boolean = false;
  constructor(
    private _movieListService: FetchmovielistService,
    private searchBehaviorService: SearchboxServiceService
  ) {}

  ngOnInit() {
    this.searchBehaviorService.currentMessage.subscribe(searchTerm => {
      if (searchTerm != "") {
        this.getMovies(searchTerm);
      }
    });
  }

  getMovies(keyword: String) {
    this.loading = true;
    console.log("button clicked");
    this._movieListService.searchMovieByKeyword(keyword).subscribe(
      data => (this.movieList = data),
      error => console.log(error),
      () => {
        this.isFetchDataComplete = true;
        this.loading = false;
      }
    );
  }
}
