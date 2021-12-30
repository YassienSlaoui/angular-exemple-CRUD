import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsehooksComponent } from './usehooks.component';

describe('UsehooksComponent', () => {
  let component: UsehooksComponent;
  let fixture: ComponentFixture<UsehooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsehooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
