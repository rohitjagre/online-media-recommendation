import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SearchboxServiceService {
  private messageSource = new BehaviorSubject<String>("");
  currentMessage = this.messageSource.asObservable();
  constructor() {}
  changeMessage(message: String) {
    this.messageSource.next(message);
  }
}
