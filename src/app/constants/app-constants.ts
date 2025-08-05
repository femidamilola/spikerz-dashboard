export interface NavItem {
  label: string;
  icon: string;
  routerLink: string;
  key?: string;
}

export interface Asset {
  name: string;
  ip: string;
  isCritical: boolean;
  vulnerabilities: string[];
}

export const RISK_LEVELS = {
  CRITICAL: 'critical',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;

export type RiskLevel = (typeof RISK_LEVELS)[keyof typeof RISK_LEVELS];

export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 5,
  AVAILABLE_PAGE_SIZES: [5, 10, 15, 20],
} as const;

export const NAV_MENU_ITEMS: NavItem[] = [
  {
    label: '',
    icon: 'dashboard',
    routerLink: '/dashboard',
    key: 'nav.dashboard',
  },
  { label: '', icon: 'bug', routerLink: '/assets', key: 'nav.assets' },
  { label: '', icon: 'wysiwyg', routerLink: '/reports', key: 'nav.reports' },
  {
    label: '',
    icon: 'vulnerabilities',
    routerLink: '/vulnerabilities',
    key: 'nav.vulnerabilities',
  },
  {
    label: '',
    icon: 'integration',
    routerLink: '/remediations',
    key: 'nav.integration',
  },
  { label: '', icon: 'report', routerLink: '/report', key: 'nav.report' },
  {
    label: '',
    icon: 'help_outline',
    routerLink: '/analytics',
    key: 'nav.analytics',
  },
];

export const NAV_SETTINGS_ITEMS: NavItem[] = [
  { label: '', icon: 'settings', routerLink: '/settings', key: 'nav.settings' },
  {
    label: '',
    icon: 'notifications',
    routerLink: '/alerts',
    key: 'nav.alerts',
  },
];

export const MOCK_ASSETS: Asset[] = [
  {
    name: 'Loremipsumdolorsit',
    ip: '192.168.1.1',
    isCritical: true,
    vulnerabilities: ['1.2.3.4', '1.2.3.5', '1.2.3.6'],
  },
  {
    name: 'Loremipsumdolorsit002',
    ip: '192.168.1.2',
    isCritical: true,
    vulnerabilities: ['1.2.3.7', '1.2.3.8', '1.2.3.99'],
  },
  {
    name: 'WebServer-Production',
    ip: '192.168.1.3',
    isCritical: true,
    vulnerabilities: ['1.2.3.9'],
  },
  {
    name: 'DatabaseServer-Main',
    ip: '192.168.1.4',
    isCritical: false,
    vulnerabilities: ['1.2.3.10', '1.2.3.11'],
  },
  {
    name: 'LoadBalancer-Primary',
    ip: '192.168.1.5',
    isCritical: false,
    vulnerabilities: ['1.2.3.12', '1.2.3.98', '1.2.3.99'],
  },
  {
    name: 'APIGateway-v2',
    ip: '192.168.1.6',
    isCritical: false,
    vulnerabilities: ['1.2.3.13', '1.2.3.14'],
  },
  {
    name: 'FileServer-Backup',
    ip: '192.168.1.7',
    isCritical: false,
    vulnerabilities: ['1.2.3.15'],
  },
  {
    name: 'MonitoringServer',
    ip: '192.168.1.8',
    isCritical: true,
    vulnerabilities: ['1.2.3.16', '1.2.3.17'],
  },
  {
    name: 'AuthenticationServer',
    ip: '192.168.1.9',
    isCritical: true,
    vulnerabilities: ['1.2.3.18'],
  },
  {
    name: 'CacheServer-Redis',
    ip: '192.168.1.10',
    isCritical: false,
    vulnerabilities: ['1.2.3.19', '1.2.3.20'],
  },
  {
    name: 'MessageQueue-RabbitMQ',
    ip: '192.168.1.11',
    isCritical: false,
    vulnerabilities: ['1.2.3.21'],
  },
  {
    name: 'SearchEngine-Elastic',
    ip: '192.168.1.12',
    isCritical: true,
    vulnerabilities: ['1.2.3.22', '1.2.3.23'],
  },
  {
    name: 'CDN-Distribution',
    ip: '192.168.1.13',
    isCritical: false,
    vulnerabilities: ['1.2.3.24'],
  },
  {
    name: 'BackupServer-Secondary',
    ip: '192.168.1.14',
    isCritical: false,
    vulnerabilities: ['1.2.3.25', '1.2.3.26'],
  },
  {
    name: 'LoggingServer-ELK',
    ip: '192.168.1.15',
    isCritical: true,
    vulnerabilities: ['1.2.3.27'],
  },
];

export interface IInfoCard {
  title: string;
  title2: string;
  subtitle: string;
  icon: string;
  content: string;
  description: string;
}

export interface InfoListItem {
  label: string;
  value: string;
  icon?: string;
}

export const MOCK_INFO_LIST_STRUCTURE = [
  { labelKey: 'extra.info.label1', valueKey: 'extra.info.value1' },
  { labelKey: 'extra.info.label2', valueKey: 'extra.info.value2' },
  { labelKey: 'extra.info.label3', valueKey: 'extra.info.value3' },
  {
    labelKey: 'extra.info.label4',
    valueKey: 'extra.info.value4',
    icon: 'checkmark',
  },
  { labelKey: 'extra.info.label5', valueKey: 'extra.info.value5' },
  { labelKey: 'extra.info.label6', valueKey: 'extra.info.value6' },
  { labelKey: 'extra.info.label6', valueKey: 'extra.info.value6' },
];

export const MOCK_CARDS_STRUCTURE = [
  {
    titleKey: 'extra.cards.title1',
    title2Key: 'extra.cards.server',
    subtitleKey: 'extra.cards.server',
    icon: 'server',
    contentKey: 'extra.cards.content1',
    descriptionKey: 'extra.cards.description1',
  },
  {
    titleKey: 'extra.cards.title2',
    title2Key: 'extra.cards.server',
    subtitleKey: 'extra.cards.server',
    icon: 'server',
    contentKey: 'extra.cards.content2',
    descriptionKey: 'extra.cards.description2',
  },
  {
    titleKey: 'extra.cards.title3',
    title2Key: 'extra.cards.server',
    subtitleKey: 'extra.cards.server',
    icon: 'server',
    contentKey: 'extra.cards.content3',
    descriptionKey: 'extra.cards.description3',
  },
];

export const MOCK_RISK_SUMMARY = {
  critical: 2,
  high: 0,
  medium: 0,
  low: 0,
};

export const APP_CONFIG = {
  VERSION: '1.0.0',
  DEFAULT_LANGUAGE: 'en',
  SUPPORTED_LANGUAGES: ['en', 'es', 'fr', 'de'] as const,
  DATE_FORMAT: 'MM/dd/yyyy',
} as const;

export type SupportedLanguage = (typeof APP_CONFIG.SUPPORTED_LANGUAGES)[number];
