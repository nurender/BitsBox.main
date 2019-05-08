import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALERTComponent } from './alert.component';

describe('ALERTComponent', () => {
  let component: ALERTComponent;
  let fixture: ComponentFixture<ALERTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALERTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALERTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
