import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StGetComponent } from './st-get.component';

describe('StGetComponent', () => {
  let component: StGetComponent;
  let fixture: ComponentFixture<StGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
