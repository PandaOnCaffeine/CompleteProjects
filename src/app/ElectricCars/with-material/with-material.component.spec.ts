import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMaterialComponent } from './with-material.component';

describe('WithMaterialComponent', () => {
  let component: WithMaterialComponent;
  let fixture: ComponentFixture<WithMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
