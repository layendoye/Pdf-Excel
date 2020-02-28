import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LireExelComponent } from './lire-exel.component';

describe('LireExelComponent', () => {
  let component: LireExelComponent;
  let fixture: ComponentFixture<LireExelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LireExelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LireExelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
