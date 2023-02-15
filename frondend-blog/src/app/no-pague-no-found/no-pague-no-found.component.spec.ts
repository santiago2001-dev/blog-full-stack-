import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPagueNoFoundComponent } from './no-pague-no-found.component';

describe('NoPagueNoFoundComponent', () => {
  let component: NoPagueNoFoundComponent;
  let fixture: ComponentFixture<NoPagueNoFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPagueNoFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPagueNoFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
