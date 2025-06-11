import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SturctureBlockComponent } from './sturcture-block.component';
import { SturctureBlockModule } from './sturcture-block.module';

describe('SturctureBlockComponent', () => {
  let component: SturctureBlockComponent;
  let fixture: ComponentFixture<SturctureBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SturctureBlockModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SturctureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
