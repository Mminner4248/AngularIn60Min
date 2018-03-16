import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHerosComponent } from './marvel-heros.component';

describe('MarvelHerosComponent', () => {
  let component: MarvelHerosComponent;
  let fixture: ComponentFixture<MarvelHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
