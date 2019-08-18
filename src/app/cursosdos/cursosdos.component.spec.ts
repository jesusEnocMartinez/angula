import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosdosComponent } from './cursosdos.component';

describe('CursosdosComponent', () => {
  let component: CursosdosComponent;
  let fixture: ComponentFixture<CursosdosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosdosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
