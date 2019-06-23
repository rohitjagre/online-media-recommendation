import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendTvshowsComponent } from './recommend-tvshows.component';

describe('RecommendTvshowsComponent', () => {
  let component: RecommendTvshowsComponent;
  let fixture: ComponentFixture<RecommendTvshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendTvshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
