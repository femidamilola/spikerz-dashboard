import {
  Component,
  ElementRef,
  viewChild,
  AfterViewInit,
  inject,
  DestroyRef,
} from '@angular/core';
import { IBadge, Node } from './components/node/node';
import { Arrow } from './components/arrow/arrow';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PopoverData } from '../../core/popover/popover';

export type DiagramNode = {
  id: string;
  title: string;
  color: string;
  icon: string;
  badge?: IBadge;
  ip?: string;
  popoverData?: PopoverData;
};

export type NodeGroup = {
  nodes: DiagramNode[];
};

@Component({
  selector: 'app-asset-diagram',
  imports: [Node, CustomIcon],
  templateUrl: './asset-diagram.html',
  styleUrl: './asset-diagram.scss',
})
export class AssetDiagram implements AfterViewInit {
  private destroyRef = inject(DestroyRef);

  diagramWrapper =
    viewChild.required<ElementRef<HTMLElement>>('diagramWrapper');

  private containerWidth = 0;
  private nodeWidth = 100;
  private calculatedArrowWidth = 120;
  private readonly ARROW_COLOR = 'var(--color-arrow)';
  private readonly DEFAULT_ARROW_IMAGE = '/images/arrow.png';
  private readonly SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

  nodeGroups: NodeGroup[] = [
    {
      nodes: [
        {
          id: 'node1',
          title: 'Loremipsumm',
          color: 'red',
          icon: 'mask',
          badge: { color: 'purple', icon: 'users' },
          popoverData: {
            title: 'Lorem Ipsum Dolor Sit',
            content: 'Lorem: 1.2.3.4',
            type: 'vulnerability',
            vulnerabilityLevel: 'critical',
            additionalInfo: {
              label: 'IP Addresses',
              text: [
                { value: '1.2.3.4' },
                { value: '1.2.3.4' },
                { value: '1.2.3.4' },
                { value: '1.2.3.4' },
                { value: '1.2.3.4' },
                { value: '1.2.3.4' },
              ],
            },
          },
        },
      ],
    },
    {
      nodes: [
        {
          id: 'node2',
          title: 'Loremipsu',
          color: 'blue',
          icon: 'server',
          popoverData: {
            title: 'Loremipsu',
            content: '',
            type: 'normal',
            additionalInfo: {
              label: 'Lorem',
              text: [
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
              ],
            },
          },
        },
      ],
    },
    {
      nodes: [
        {
          id: 'node3',
          title: 'Loremipsu',
          color: 'blue',
          icon: 'server',
          popoverData: {
            title: 'Loremipsum',
            content: '',
            type: 'normal',
            additionalInfo: {
              label: 'Lorem',
              text: [
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
                {
                  color: 'purple',
                  value: '1.2.3.4',
                },
              ],
            },
          },
        },
      ],
    },
    {
      nodes: [
        {
          id: 'node4',
          title: 'Loremipsumdolorsit',
          color: 'blue',
          icon: 'server',
          ip: '192.168.1.1',
          badge: { color: 'red', icon: 'shield_x' },
          popoverData: {
            title: 'Loremipsumdolorsit',
            content: '192.168.1.1',
            type: 'normal',
            badge: { color: 'red', icon: 'shield_x' },
            additionalInfo: {
              label: 'Lorem',
              text: [
                {
                  color: 'yellow',
                  value: 'Lorem "ipsum"',
                },
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: 'blue',
                  value: 'Lorem 1234,5678',
                },
              ],
            },
          },
        },
        {
          id: 'node5',
          title: 'Loremipsumdolorsit002',
          color: 'blue',
          icon: 'server',
          ip: '192.168.1.2',
          badge: { color: 'red', icon: 'shield_x' },
          popoverData: {
            title: 'Loremipsumdolorsit002',
            content: '192.168.1.2',
            type: 'normal',
            badge: { color: 'red', icon: 'shield_x' },
            additionalInfo: {
              label: 'Lorem',
              text: [
                {
                  color: 'yellow',
                  value: 'Lorem "ipsum"',
                },
                {
                  color: '',
                  value: 'Loremipsum',
                },
                {
                  color: 'blue',
                  value: 'Lorem 1234,5678',
                },
              ],
            },
          },
        },
      ],
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.calculateDimensions();
    this.setupResizeObserver();
  }

  private calculateDimensions() {
    const wrapper = this.diagramWrapper().nativeElement;
    this.containerWidth = wrapper.clientWidth;

    const totalNodes = this.nodeGroups.length;
    const totalNodeWidth = totalNodes * this.nodeWidth;

    const availableWidth = this.containerWidth - 48;

    const singleArrowMinWidth = 40;
    let totalArrowMultiplier = 0;

    for (let i = 1; i < this.nodeGroups.length; i++) {
      const targetGroup = this.nodeGroups[i];
      if (targetGroup.nodes.length > 1) {
        totalArrowMultiplier += 2;
      } else {
        totalArrowMultiplier += 1;
      }
    }

    const availableSpaceForArrows = Math.max(
      0,
      availableWidth - totalNodeWidth
    );

    if (totalArrowMultiplier > 0) {
      this.calculatedArrowWidth = Math.max(
        singleArrowMinWidth,
        availableSpaceForArrows / totalArrowMultiplier
      );
    } else {
      this.calculatedArrowWidth = singleArrowMinWidth;
    }
  }

  private setupResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(() => {
        this.calculateDimensions();
      });

      resizeObserver.observe(this.diagramWrapper().nativeElement);

      this.destroyRef.onDestroy(() => {
        resizeObserver.disconnect();
      });
    }
  }

  getArrowType(targetGroupIndex: number): SafeHtml {
    if (targetGroupIndex >= this.nodeGroups.length) {
      return this.DEFAULT_ARROW_IMAGE;
    }

    const targetGroup = this.nodeGroups[targetGroupIndex];
    const targetNodeCount = targetGroup.nodes.length;

    if (this.calculatedArrowWidth === 120) {
      this.calculateDimensions();
    }

    const rawSvg =
      targetNodeCount > 1
        ? this.createMultipleNodesArrowSvg()
        : this.createSingleNodeArrowSvg();

    return this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }

  getDynamicArrowWidth(targetGroupIndex?: number): number {
    if (
      targetGroupIndex !== undefined &&
      targetGroupIndex < this.nodeGroups.length
    ) {
      const targetGroup = this.nodeGroups[targetGroupIndex];
      if (targetGroup.nodes.length > 1) {
        return this.calculatedArrowWidth * 2;
      }
    }
    return this.calculatedArrowWidth;
  }

  private createMultipleNodesArrowSvg(): string {
    const arrowWidth = this.calculatedArrowWidth * 2;
    const originalWidth = 208;
    const originalHeight = 110;
    const scaleX = arrowWidth / originalWidth;
    const scaledHeight = originalHeight;
    const viewBox = `0 0 ${arrowWidth} ${scaledHeight}`;

    const scale = scaleX;

    return `<svg width="${arrowWidth}" height="${scaledHeight}" viewBox="${viewBox}" fill="none" xmlns="${
      this.SVG_NAMESPACE
    }">
<path d="M${arrowWidth} 2.56104L${arrowWidth - 3.75} 4.7261L${
      arrowWidth - 3.75
    } 0.395972L${arrowWidth} 2.56104ZM${
      80.8318 * scale
    } 55.936L0 55.936L0 55.186L${80.8318 * scale} 55.186L${
      80.8318 * scale
    } 55.936ZM${arrowWidth - 3.375} 2.93604L${144.795 * scale} 2.93603L${
      144.795 * scale
    } 2.18603L${arrowWidth - 3.375} 2.18604L${arrowWidth - 3.375} 2.93604ZM${
      127.503 * scale
    } 11.2585L${98.7098 * scale} 47.3314L${98.1236 * scale} 46.8635L${
      126.917 * scale
    } 10.7907L${127.503 * scale} 11.2585ZM${144.795 * scale} 2.93603C${
      138.066 * scale
    } 2.93603 ${131.702 * scale} 5.99895 ${127.503 * scale} 11.2585L${
      126.917 * scale
    } 10.7907C${131.258 * scale} 5.35277 ${137.837 * scale} 2.18603 ${
      144.795 * scale
    } 2.18603L${144.795 * scale} 2.93603ZM${80.8318 * scale} 55.186C${
      87.5615 * scale
    } 55.186 ${93.9254 * scale} 52.1231 ${98.1236 * scale} 46.8635L${
      98.7098 * scale
    } 47.3314C${94.3692 * scale} 52.7693 ${87.7896 * scale} 55.936 ${
      80.8318 * scale
    } 55.936L${80.8318 * scale} 55.186Z" fill="${this.ARROW_COLOR}"/>
<path d="M${arrowWidth} 107.279L${arrowWidth - 3.75} 105.114L${
      arrowWidth - 3.75
    } 109.444L${arrowWidth} 107.279ZM${
      80.9605 * scale
    } 54.9038L0 54.9038L0 55.6538L${80.9605 * scale} 55.6538L${
      80.9605 * scale
    } 54.9038ZM${arrowWidth - 3.375} 106.904L${144.667 * scale} 106.904L${
      144.667 * scale
    } 107.654L${arrowWidth - 3.375} 107.654L${arrowWidth - 3.375} 106.904ZM${
      127.504 * scale
    } 98.7416L${98.7049 * scale} 63.3427L${98.1231 * scale} 63.816L${
      126.922 * scale
    } 99.2149L${127.504 * scale} 98.7416ZM${144.667 * scale} 106.904C${
      138.009 * scale
    } 106.904 ${131.705 * scale} 103.906 ${127.504 * scale} 98.7416L${
      126.922 * scale
    } 99.2149C${131.266 * scale} 104.554 ${137.783 * scale} 107.654 ${
      144.667 * scale
    } 107.654L${144.667 * scale} 106.904ZM${80.9605 * scale} 55.6538C${
      87.618 * scale
    } 55.6538 ${93.9216 * scale} 58.6517 ${98.1231 * scale} 63.816L${
      98.7049 * scale
    } 63.3427C${94.361 * scale} 58.0033 ${87.8437 * scale} 54.9038 ${
      80.9605 * scale
    } 54.9038L${80.9605 * scale} 55.6538Z" fill="${this.ARROW_COLOR}"/>
</svg>`;
  }

  private createSingleNodeArrowSvg(): string {
    const arrowWidth = this.calculatedArrowWidth;
    const arrowHeight = 6;
    const viewBox = `0 0 ${arrowWidth} ${arrowHeight}`;

    const arrowHeadX = arrowWidth - 4;
    const arrowBodyEnd = arrowWidth - 4;

    return `<svg width="${arrowWidth}" height="${arrowHeight}" viewBox="${viewBox}" fill="none" xmlns="${
      this.SVG_NAMESPACE
    }">
<path d="M${arrowHeadX} 2.92004L${arrowHeadX - 3.75} 0.754978L${
      arrowHeadX - 3.75
    } 5.08511L${arrowHeadX} 2.92004ZM0 3.29504L${arrowBodyEnd - 3.75} 3.29504L${
      arrowBodyEnd - 3.75
    } 2.54504L0 2.54504L0 3.29504Z" fill="${this.ARROW_COLOR}"/>
</svg>`;
  }
}
