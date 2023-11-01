import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsIndividusComponent } from './gs-individus.component';

describe('GsIndividusComponent', () => {
  let component: GsIndividusComponent;
  let fixture: ComponentFixture<GsIndividusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GsIndividusComponent]
    });
    fixture = TestBed.createComponent(GsIndividusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
