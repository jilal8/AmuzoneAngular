import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireproductComponent } from './formulaireproduct.component';

describe('FormulaireproductComponent', () => {
  let component: FormulaireproductComponent;
  let fixture: ComponentFixture<FormulaireproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
