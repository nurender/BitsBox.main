import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompaniPageComponent } from './single-compani-page.component';

describe('SingleCompaniPageComponent', () => {
  let component: SingleCompaniPageComponent;
  let fixture: ComponentFixture<SingleCompaniPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompaniPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompaniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
