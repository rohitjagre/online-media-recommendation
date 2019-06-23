import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Movie } from "../../models/movie";

@Injectable()
export class FetchmovielistService {
  private url: String = "http://localhost:7070/FetchDataAPI/movie";
  constructor(private _http: HttpClient) {}
  searchMovieByKeyword(keyword: String): Observable<Movie[]> {
    let finalUrl = this.url + "/search/" + keyword + "/1";
    console.log(finalUrl);
    // this._http.get(finalUrl).subscribe(data => console.log(data));

    return this._http.get<Movie[]>(finalUrl);
  }

  getMovieDetail(movieId: String): Observable<Movie> {
    let finalUrl = this.url + "/" + movieId;
    console.log(finalUrl);
    return this._http.get<Movie>(finalUrl);
  }

  getRecommendedMovies(movieId: String): Observable<Movie[]> {
    let finalUrl = this.url + "/recommendation/" + movieId + "/1";
    console.log(finalUrl);
    return this._http.get<Movie[]>(finalUrl);
  }
}
