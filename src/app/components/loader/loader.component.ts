import { Component, Input, OnInit } from '@angular/core';
import { loaderType } from './models/loader-type-enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() isLoading = false
  @Input() loaderType: loaderType = loaderType.Circular
  LoaderType = loaderType

  get LoadingText(): string {
    return `${this.loading}${this.loadingPeriods}`

  }

  private loading = 'loading'
  private  loadingPeriods = '.'


  constructor() { }

  ngOnInit(): void {
    if (this.loaderType === this.LoaderType.Loading) {
      this.updateLoaderPeriod()
    }
  }


  private updateLoaderPeriod() {
    let currentStep = 0
    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..'
          currentStep++
          break

        case 1:
          this.loadingPeriods = '...'
          currentStep++
          break
        case 2:
          this.loadingPeriods = '.'
          currentStep = 0
          break
      }
    }, 500)
  }
}
