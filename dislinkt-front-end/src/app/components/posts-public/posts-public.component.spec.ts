import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsPublicComponent } from './posts-public.component';

describe('PostsPublicComponent', () => {
  let component: PostsPublicComponent;
  let fixture: ComponentFixture<PostsPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
