import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitiesDrawer } from './vulnerabilities-drawer';

describe('VulnerabilitiesDrawer', () => {
  let component: VulnerabilitiesDrawer;
  let fixture: ComponentFixture<VulnerabilitiesDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VulnerabilitiesDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VulnerabilitiesDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
