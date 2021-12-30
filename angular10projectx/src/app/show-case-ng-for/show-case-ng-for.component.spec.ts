import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaseNgForComponent } from './show-case-ng-for.component';

describe('ShowCaseNgForComponent', () => {
  let component: ShowCaseNgForComponent;
  let fixture: ComponentFixture<ShowCaseNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCaseNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
