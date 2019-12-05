import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StAddComponent } from './st-add.component';

describe('StAddComponent', () => {
  let component: StAddComponent;
  let fixture: ComponentFixture<StAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
