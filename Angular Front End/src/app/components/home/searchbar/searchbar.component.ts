import { Component, OnInit } from "@angular/core";
import { FetchmovielistService } from "../../../services/movie/fetchmovielist.service";
import { FetchtvshowlistService } from "../../../services/tvshow/fetchtvshowlist.service";
import { SearchboxServiceService } from "../../../services/behaviour-subject/searchbox-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  searchTerm: String = "";
  constructor(
    private movieService: FetchmovielistService,
    private tvShowService: FetchtvshowlistService,
    private searchBehaviorService: SearchboxServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.searchTerm != "") {
      this.searchBehaviorService.changeMessage(this.searchTerm);
      this.router.navigate(["/home", "app"]);
    }
  }
}
