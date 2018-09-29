import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtDetailsComponent } from './tshirt-details.component';

describe('TshirtDetailsComponent', () => {
  let component: TshirtDetailsComponent;
  let fixture: ComponentFixture<TshirtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TshirtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
