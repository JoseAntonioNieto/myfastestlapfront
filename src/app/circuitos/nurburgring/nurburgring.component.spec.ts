import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurburgringComponent } from './nurburgring.component';

describe('NurburgringComponent', () => {
  let component: NurburgringComponent;
  let fixture: ComponentFixture<NurburgringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurburgringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurburgringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
