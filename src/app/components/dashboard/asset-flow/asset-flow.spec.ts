import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetFlow } from './asset-flow';

describe('AssetFlow', () => {
  let component: AssetFlow;
  let fixture: ComponentFixture<AssetFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
