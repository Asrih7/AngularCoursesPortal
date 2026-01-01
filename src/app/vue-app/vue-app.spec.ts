import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueApp } from './vue-app';

describe('VueApp', () => {
  let component: VueApp;
  let fixture: ComponentFixture<VueApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VueApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
