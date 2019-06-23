import { Component, OnInit } from "@angular/core";
import { TVShow } from "../../../models/tvshow";
import { FetchtvshowlistService } from "../../../services/tvshow/fetchtvshowlist.service";
import { ActivatedRoute } from "@angular/router";
import { Input } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { NgxCarousel } from "ngx-carousel";

@Component({
  selector: "app-recommend-tvshows",
  templateUrl: "./recommend-tvshows.component.html",
  styleUrls: ["./recommend-tvshows.component.css"]
})
export class RecommendTvshowsComponent implements OnInit {
  loading: boolean = false;
  tvShows: TVShow[];
  @Input() tvShowId: String;

  constructor(
    private tvShowService: FetchtvshowlistService,
    private router: ActivatedRoute
  ) {}
  ////////////////////////////////////////////////

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: "lazy",
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: "ease"
    };
  }

  public carouselTileLoad(evt: any) {
    const len = this.tvShows.length;
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.tvShows.push(this.tvShows[i]);
      }
    }
  }

  ///////////////////////////////////////////////////

  // ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.loading = true;
    console.log("parent value changes " + changes.tvShowId);
    this.getRecommendedTVShows();
  }

  getRecommendedTVShows() {
    this.tvShowService.getRecommendedShows(this.tvShowId).subscribe(
      data => (this.tvShows = data),
      error => console.log(error),
      () => {
        this.loading = false;
        console.log(this.tvShows);
      }
    );
  }
}
