import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMaterialComponent } from './not-material.component';

describe('NotMaterialComponent', () => {
  let component: NotMaterialComponent;
  let fixture: ComponentFixture<NotMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
