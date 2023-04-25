import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricesFormComponent } from './matrices-form.component';

describe('MatricesFormComponent', () => {
  let component: MatricesFormComponent;
  let fixture: ComponentFixture<MatricesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatricesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatricesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
