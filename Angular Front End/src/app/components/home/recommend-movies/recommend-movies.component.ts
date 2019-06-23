import { Component, OnInit, Input } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { FetchmovielistService } from "../../../services/movie/fetchmovielist.service";
import { Movie } from "../../../models/movie";

@Component({
  selector: "app-recommend-movies",
  templateUrl: "./recommend-movies.component.html",
  styleUrls: ["./recommend-movies.component.css"]
})
export class RecommendMoviesComponent implements OnInit {
  @Input() movieId: String;
  loading: boolean = false;
  isFetchingFinished: boolean = false;
  movies: Movie[];

  constructor(private movieService: FetchmovielistService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.getRecommendedMovies();
  }

  getRecommendedMovies() {
    this.loading = true;
    this.movieService.getRecommendedMovies(this.movieId).subscribe(
      data => (this.movies = data),
      error => console.log(error),
      () => {
        this.loading = true;
        this.isFetchingFinished = true;
        console.log(this.movies);
      }
    );
  }
}
