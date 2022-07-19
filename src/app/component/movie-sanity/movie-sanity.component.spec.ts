import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSanityComponent } from './movie-sanity.component';

describe('MovieSanityComponent', () => {
  let component: MovieSanityComponent;
  let fixture: ComponentFixture<MovieSanityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSanityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSanityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
