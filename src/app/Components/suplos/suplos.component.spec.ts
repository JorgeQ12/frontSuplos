import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplosComponent } from './suplos.component';

describe('SuplosComponent', () => {
  let component: SuplosComponent;
  let fixture: ComponentFixture<SuplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuplosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
