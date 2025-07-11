import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageComponent } from './sub-page.component';
import { SubPageModule } from './sub-page.module';

describe('SubPageComponent', () => {
  let component: SubPageComponent;
  let fixture: ComponentFixture<SubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPageModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
