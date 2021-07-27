import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePostsComponent } from './liste-posts.component';

describe('ListePostsComponent', () => {
  let component: ListePostsComponent;
  let fixture: ComponentFixture<ListePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
