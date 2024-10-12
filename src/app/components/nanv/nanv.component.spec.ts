import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanvComponent } from './nanv.component';

describe('NanvComponent', () => {
  let component: NanvComponent;
  let fixture: ComponentFixture<NanvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NanvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NanvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
