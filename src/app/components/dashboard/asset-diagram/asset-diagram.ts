import { Component } from '@angular/core';
import { IBadge, Node } from './components/node/node';
import { Arrow } from './components/arrow/arrow';
import { CustomIcon } from '../../core/custom-icon/custom-icon';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface DiagramNode {
  id: string;
  title: string;
  color: string;
  icon: string;
  badge?: IBadge;
  ip?: string;
}

export interface NodeGroup {
  nodes: DiagramNode[];
}

@Component({
  selector: 'app-asset-diagram',
  imports: [Node, CustomIcon],
  templateUrl: './asset-diagram.html',
  styleUrl: './asset-diagram.scss',
})
export class AssetDiagram {
  nodeGroups: NodeGroup[] = [
    {
      nodes: [
        {
          id: 'node1',
          title: 'Loremipsumm',
          color: 'red',
          icon: 'mask',
          badge: { color: 'purple', icon: 'users' },
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
        },
        {
          id: 'node5',
          title: 'Loremipsumdolorsit002',
          color: 'blue',
          icon: 'server',
          ip: '192.168.1.2',
          badge: { color: 'red', icon: 'shield_x' },
        },
      ],
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getArrowType(targetGroupIndex: number): SafeHtml {
    if (targetGroupIndex >= this.nodeGroups.length) {
      return '/images/arrow.png'; // Default fallback
    }

    const targetGroup = this.nodeGroups[targetGroupIndex];
    const targetNodeCount = targetGroup.nodes.length;

    let rawSvg =
      targetNodeCount > 1
        ? `<svg width="350" height="220" viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                 <polygon points="0 0, 10 3.5, 0 7" fill="#7c8698"></polygon>
               </marker>
             </defs>
             <path d="M 0 110 Q 90 110, 130 110" stroke="#7c8698" stroke-width="2" fill="none"></path>
             <path d="M 130 110 C 160 110, 170 40, 200 40 L 330 40" stroke="#7c8698" stroke-width="2" fill="none" marker-end="url(#arrowhead)"></path>
             <path d="M 130 110 C 160 110, 170 180, 200 180 L 330 180" stroke="#7c8698" stroke-width="2" fill="none" marker-end="url(#arrowhead)"></path>
           </svg>`
        : `<svg width="120" height="20" viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                 <polygon points="0 0, 10 3.5, 0 7" fill="#7c8698"></polygon>
               </marker>
             </defs>
             <line x1="0" y1="10" x2="110" y2="10" stroke="#7c8698" stroke-width="2" marker-end="url(#arrowhead)"></line>
           </svg>`;

    return this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }
}
