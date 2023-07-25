import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {


  @Input()  baseHref = 'https://www.linkedin.com/in/abanoub-kerols-22b10119a/';
  @Input()  hashTags : string[] =  ['Abanoub', 'JavaScript', 'TypeScript', 'Angular','100 Angular Challenge'];
  constructor(
    public title : Title
  ) { }

  public get twitterURL():string{
  
    const base = this.getBaseWithHashTagsAndRoute()
    const msg = encodeURIComponent(`check out ${this.title.getTitle()} and become a coding `)
    return `${base}${msg}`

  }

  ngOnInit(): void {
  }


  private getBaseWithHashTagsAndRoute(){
    const route = encodeURI(this.baseHref)
    const hashtags = this.hashTags.join(',')
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashtags)}&related=pizzapokerguy&url=${route}&text=`;
  }

}
