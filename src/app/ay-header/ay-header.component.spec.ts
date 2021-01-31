import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyHeaderComponent } from './ay-header.component';

describe('AyHeaderComponent', () => {
  let component: AyHeaderComponent;
  let fixture: ComponentFixture<AyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
