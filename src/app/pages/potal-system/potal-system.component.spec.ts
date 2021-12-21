import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotalSystemComponent } from './potal-system.component';

describe('PotalSystemComponent', () => {
  let component: PotalSystemComponent;
  let fixture: ComponentFixture<PotalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotalSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
