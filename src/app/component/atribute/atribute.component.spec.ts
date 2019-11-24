import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributeComponent } from './atribute.component';

describe('AtributeComponent', () => {
  let component: AtributeComponent;
  let fixture: ComponentFixture<AtributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
