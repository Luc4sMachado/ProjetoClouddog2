import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcateComponent } from './cadcate.component';

describe('CadcateComponent', () => {
  let component: CadcateComponent;
  let fixture: ComponentFixture<CadcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
