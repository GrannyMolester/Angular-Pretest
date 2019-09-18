import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListElementComponent } from './news-list-element.component';

describe('NewsListElementComponent', () => {
  let component: NewsListElementComponent;
  let fixture: ComponentFixture<NewsListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
