import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualRisk } from './contextual-risk';

describe('ContextualRisk', () => {
  let component: ContextualRisk;
  let fixture: ComponentFixture<ContextualRisk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualRisk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualRisk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
