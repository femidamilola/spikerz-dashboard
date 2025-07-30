import { Component } from '@angular/core';
import { Description } from '../../components/dashboard/description/description';
import { Extra } from '../../components/dashboard/extra/extra';
import { AssetFlow } from '../../components/dashboard/asset-flow/asset-flow';
import { ContextualRisk } from '../../components/dashboard/contextual-risk/contextual-risk';
import { RiskSummary } from '../../components/dashboard/risk-summary/risk-summary';

@Component({
  selector: 'app-dashboard',
  imports: [Description, Extra, AssetFlow, ContextualRisk, RiskSummary],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  description: string =
    'Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.';
  extra: string =
    'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.';
}
