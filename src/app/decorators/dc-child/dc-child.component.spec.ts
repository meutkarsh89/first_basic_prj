import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcChildComponent } from './dc-child.component';

describe('DcChildComponent', () => {
  let component: DcChildComponent;
  let fixture: ComponentFixture<DcChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
