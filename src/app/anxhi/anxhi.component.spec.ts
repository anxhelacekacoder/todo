import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxhiComponent } from './anxhi.component';

describe('AnxhiComponent', () => {
  let component: AnxhiComponent;
  let fixture: ComponentFixture<AnxhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxhiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnxhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
