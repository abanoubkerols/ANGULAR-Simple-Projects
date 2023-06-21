import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPAgeComponent implements OnInit {


  constructor(private viewScroller: ViewportScroller) { }


  public isShown = false
  ngOnInit(): void {
  }

  @HostListener('window:scroll') onWindowScroll() {
    const YCoordinate = this.viewScroller.getScrollPosition()[1]
    this.isShown = YCoordinate > 10

  }

  goTop(): void {
    this.viewScroller.scrollToPosition([0, 0])
  }

}
