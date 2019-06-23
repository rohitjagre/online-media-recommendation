import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FetchmovielistService } from "../../../services/movie/fetchmovielist.service";
import { Movie } from "../../../models/movie";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movieDetail: Movie;
  isFetchingFinished: boolean = false;
  loading: boolean = false;
  movieId: String;
  constructor(
    private router: ActivatedRoute,
    private movieService: FetchmovielistService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.movieId = params["movieId"];
      this.getMovieDetail();
      console.log("Movie id " + this.movieId);
    });
  }

  getMovieDetail() {
    this.loading = true;
    this.movieService.getMovieDetail(this.movieId).subscribe(
      data => (this.movieDetail = data),
      error => console.log("Error " + error),
      () => {
        this.loading = false;
        this.isFetchingFinished = true;
        console.log(this.movieDetail);
      }
    );
  }
}
