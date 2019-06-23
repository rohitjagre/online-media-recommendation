import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendMoviesComponent } from './recommend-movies.component';

describe('RecommendMoviesComponent', () => {
  let component: RecommendMoviesComponent;
  let fixture: ComponentFixture<RecommendMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
