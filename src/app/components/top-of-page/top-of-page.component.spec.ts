import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfPAgeComponent } from './top-of-page.component';

describe('TopOfPAgeComponent', () => {
  let component: TopOfPAgeComponent;
  let fixture: ComponentFixture<TopOfPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOfPAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopOfPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
