import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPageComponent } from './full-page.component';
import { FullPageModule } from './full-page.module';

describe('FullPageComponent', () => {
  let component: FullPageComponent;
  let fixture: ComponentFixture<FullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullPageModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
