import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Foundation } from '../../models/Foundation';
import { FoundationService } from '../../services/foundation.service';

@Component({
  templateUrl: 'detail.html'
})
export class DetailPage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  foundation: Foundation;
  slidesShowing: Boolean;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private FoundationService: FoundationService
  ) {}

  ngOnInit() {
    this.getFoundation(this.params.get('id'));
  }

  private showSlides(): void {
    this.slidesShowing = true;
  }

  private hideSlides(): void {
    this.slidesShowing = false;
  }

  // this ain't working yet hah
  // private goToSlide(slideNumber: number): void {
  //   if (!this.slidesShowing) this.slidesShowing = true;
  //   console.log('this.slides', this.slides);
  //   this.slides.slideTo(slideNumber);
  // }

  private getFoundation(foundationId): void {
    this.FoundationService.getFoundation(foundationId)
      .then(foundation => {
        this.foundation = foundation;
        console.log(this.foundation);
      });
  }
}
