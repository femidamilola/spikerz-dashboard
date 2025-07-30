import { Component } from '@angular/core';
import { IBadge, Node } from './components/node/node';
import { Arrow } from './components/arrow/arrow';
import { CustomIcon } from '../../core/custom-icon/custom-icon';

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

  getArrowType(targetGroupIndex: number): string {
    if (targetGroupIndex >= this.nodeGroups.length) {
      return '/images/arrow.png'; // Default fallback
    }

    const targetGroup = this.nodeGroups[targetGroupIndex];
    const targetNodeCount = targetGroup.nodes.length;

    return targetNodeCount > 1
      ? '/images/arrow-double.png'
      : '/images/arrow.png';
  }
}
