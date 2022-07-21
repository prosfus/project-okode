import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearcherComponent } from './movie-searcher.component';

describe('MovieSearcherComponent', () => {
  let component: MovieSearcherComponent;
  let fixture: ComponentFixture<MovieSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSearcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
