import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsCasiersComponent } from './gs-casiers.component';

describe('GsCasiersComponent', () => {
  let component: GsCasiersComponent;
  let fixture: ComponentFixture<GsCasiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsCasiersComponent]
    });
    fixture = TestBed.createComponent(GsCasiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
