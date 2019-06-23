import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TVShow } from "../../../models/tvshow";
import { FetchtvshowlistService } from "../../../services/tvshow/fetchtvshowlist.service";

@Component({
  selector: "app-tv-show-detail",
  templateUrl: "./tv-show-detail.component.html",
  styleUrls: ["./tv-show-detail.component.css"]
})
export class TvShowDetailComponent implements OnInit {
  loading: boolean = false;
  tvShowDetail: TVShow;
  isDetailFetched: boolean = false;
  tvShowId: String;
  constructor(
    private router: ActivatedRoute,
    private tvShowService: FetchtvshowlistService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.tvShowId = params["tvShowId"];
      this.getTVShowDetail();
    });
  }

  getTVShowDetail() {
    this.loading = true;
    this.tvShowService.getTVShowDetail(this.tvShowId).subscribe(
      data => (this.tvShowDetail = data),
      error => console.log(error),
      () => {
        this.loading = false;
        this.isDetailFetched = true;
        console.log(this.tvShowDetail);
      }
    );
  }
}
