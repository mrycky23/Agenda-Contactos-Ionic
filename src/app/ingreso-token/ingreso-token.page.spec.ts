import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoTokenPage } from './ingreso-token.page';

describe('IngresoTokenPage', () => {
  let component: IngresoTokenPage;
  let fixture: ComponentFixture<IngresoTokenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoTokenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
