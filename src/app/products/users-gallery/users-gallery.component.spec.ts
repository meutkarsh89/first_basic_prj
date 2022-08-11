import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGalleryComponent } from './users-gallery.component';

describe('UsersGalleryComponent', () => {
  let component: UsersGalleryComponent;
  let fixture: ComponentFixture<UsersGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
