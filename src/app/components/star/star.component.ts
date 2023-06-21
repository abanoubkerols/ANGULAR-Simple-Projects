import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() public rating = 5
  constructor() { }

  ngOnInit(): void {
  }


  get fullstar(): number[] {
    const totalFullStar = Math.floor(this.rating)
    return Array(totalFullStar)
  }

  get hasHalfStars(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= .5) && this.rating !== 5

    return hasHalfStar
  }

  get emptyStars():number[]{
    const highRating = 5  
    const totalEmptyStars = Math.floor(highRating - this.rating)
    return Array(totalEmptyStars)
  }
}
