import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileePage } from './mobilee.page';

describe('MobileePage', () => {
  let component: MobileePage;
  let fixture: ComponentFixture<MobileePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MobileePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
