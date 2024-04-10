import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMePageComponent } from './with-me-page.component';

describe('WithMePageComponent', () => {
  let component: WithMePageComponent;
  let fixture: ComponentFixture<WithMePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WithMePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithMePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
