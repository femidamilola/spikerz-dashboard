import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDiagram } from './asset-diagram';

describe('AssetDiagram', () => {
  let component: AssetDiagram;
  let fixture: ComponentFixture<AssetDiagram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetDiagram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDiagram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
