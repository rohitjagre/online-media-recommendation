import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TVShow } from "../../models/tvshow";
import "rxjs/add/operator/do";

@Injectable()
export class FetchtvshowlistService {
  private url = "http://localhost:7070/FetchDataAPI/tvshow";
  constructor(private _http: HttpClient) {}
  searchTVShow(keyword: String): Observable<TVShow[]> {
    let finalUrl = this.url + "/search/" + keyword + "/1";
    console.log(finalUrl);
    return this._http.get<TVShow[]>(finalUrl);
  }

  getTVShowDetail(tvShowId: String): Observable<TVShow> {
    let finalUrl = this.url + "/" + tvShowId;
    console.log(finalUrl);
    return this._http.get<TVShow>(finalUrl);
  }

  getRecommendedShows(tvShowId: String): Observable<TVShow[]> {
    let finalUrl = this.url + "/recommendation/" + tvShowId + "/1";
    console.log(finalUrl);
    return this._http.get<TVShow[]>(finalUrl);
  }
}
