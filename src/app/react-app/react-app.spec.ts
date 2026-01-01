import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactApp } from './react-app';

describe('ReactApp', () => {
  let component: ReactApp;
  let fixture: ComponentFixture<ReactApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
