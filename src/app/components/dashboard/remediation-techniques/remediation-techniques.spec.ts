import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationTechniques } from './remediation-techniques';

describe('RemediationTechniques', () => {
  let component: RemediationTechniques;
  let fixture: ComponentFixture<RemediationTechniques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationTechniques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationTechniques);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
