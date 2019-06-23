import { Component, OnInit } from "@angular/core";
import { TVShow } from "../../../models/tvshow";
import { FetchtvshowlistService } from "../../../services/tvshow/fetchtvshowlist.service";
import { SearchboxServiceService } from "../../../services/behaviour-subject/searchbox-service.service";

@Component({
  selector: "app-tvshow-slider",
  templateUrl: "./tvshow-slider.component.html",
  styleUrls: ["./tvshow-slider.component.css"]
})
export class TvshowSliderComponent implements OnInit {
  tvShows: TVShow[];
  isFinishedFetching: boolean = false;
  loading: boolean = false;
  constructor(
    private tvShowService: FetchtvshowlistService,
    private searchBehaviorService: SearchboxServiceService
  ) {}

  ngOnInit() {
    this.searchBehaviorService.currentMessage.subscribe(searchTerm => {
      if (searchTerm != "") {
        this.getTVShow(searchTerm);
      }
    });
  }

  getTVShow(searchTerm: String) {
    this.loading = true;
    this.tvShowService.searchTVShow(searchTerm).subscribe(
      shows => (this.tvShows = shows),
      error => console.log(error),
      () => {
        this.isFinishedFetching = true;
        this.loading = false;
      }
    );
  }
}
