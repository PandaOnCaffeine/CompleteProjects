import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilWithMaterialComponent } from './fossil-with-material.component';

describe('FossilWithMaterialComponent', () => {
  let component: FossilWithMaterialComponent;
  let fixture: ComponentFixture<FossilWithMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FossilWithMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FossilWithMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
