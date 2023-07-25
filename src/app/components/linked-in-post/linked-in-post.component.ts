import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linked-in-post',
  templateUrl: './linked-in-post.component.html',
  styleUrls: ['./linked-in-post.component.scss']
})
export class LinkedInPostComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

   get linkedinMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://www.DylanIsrael.com${this.router.url}`;

    return `${base}${currentSite}`;
  }

}
