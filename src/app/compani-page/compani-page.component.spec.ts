import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniPageComponent } from './compani-page.component';

describe('CompaniPageComponent', () => {
  let component: CompaniPageComponent;
  let fixture: ComponentFixture<CompaniPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
