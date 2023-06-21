import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public accordionItems : AccordionItem[] =[
    {
      title:'Example 1',
      content :'Example content 1 ',
      isExpanded :false,
    },
    {
      title:'Example 32',
      content :'Example content 23 ',
      isExpanded :false,

    }
  ]


  public progressBarVal = 25 

}
