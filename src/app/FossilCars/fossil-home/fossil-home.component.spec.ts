import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilHomeComponent } from './fossil-home.component';

describe('FossilHomeComponent', () => {
  let component: FossilHomeComponent;
  let fixture: ComponentFixture<FossilHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FossilHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FossilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
