import { FlattenPipe } from './../Flatten/flatten.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss']
})
export class PipeDocumentationComponent implements OnInit {


  FlattenData = [1, 2, [3], [4, [5, 6, [7]]]]
  modifyflatten(): void {
    this.FlattenData.push(3, 5)
  }

  reassignFlatten(): void {
    this.FlattenData = [...this.FlattenData]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
