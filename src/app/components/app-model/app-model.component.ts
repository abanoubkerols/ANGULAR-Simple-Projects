import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './app-model.component.html',
  styleUrls: ['./app-model.component.scss']
})
export class AppModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public title = '';
  public isHidden = true;

  public close(): void {
    this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }

}
