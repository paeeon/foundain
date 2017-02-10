import { Component } from '@angular/core';
import { FoundationService } from '../../services/foundation.service';
import { DetailPage } from '../detail/detail';
import { Foundation } from '../../models/Foundation';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'master-list.html'
})
export class MasterListPage {
  foundations: Foundation[];
  private searchTerms = new Subject<string>();
  foundFoundations: Observable<Foundation[]>;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    private FoundationService: FoundationService
  ) {}

  ngOnInit(): void {
    this.getFoundations();
    this.foundFoundations = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.FoundationService.search(term) : Observable.of<Foundation[]>([]))
      .catch(error => {
        console.error("Error in ngOnInit while fetching search results", error);
        return Observable.of<Foundation[]>([]);
      });
  }

  openMenu(): void {
    this.menuCtrl.open();
  }

  goToFoundation(foundation: Foundation): void {
    this.navCtrl.push(DetailPage, {
      id: foundation._id
    });
  }

  getFoundations(): void {
    this.FoundationService.getFoundations()
      .then(foundations => {
        this.foundations = foundations;
      });
  }

  search(input: string): void {
    this.searchTerms.next(input);
  }
}
