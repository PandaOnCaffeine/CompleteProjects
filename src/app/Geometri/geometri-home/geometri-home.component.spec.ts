import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriHomeComponent } from './geometri-home.component';

describe('GeometriHomeComponent', () => {
  let component: GeometriHomeComponent;
  let fixture: ComponentFixture<GeometriHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeometriHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeometriHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
