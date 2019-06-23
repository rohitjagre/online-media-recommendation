import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowSliderComponent } from './tvshow-slider.component';

describe('TvshowSliderComponent', () => {
  let component: TvshowSliderComponent;
  let fixture: ComponentFixture<TvshowSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
