import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchObjectComponent } from './search-object.component';

describe('SearchObjectComponent', () => {
  let component: SearchObjectComponent;
  let fixture: ComponentFixture<SearchObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
