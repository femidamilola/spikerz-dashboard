export const TEXT_CONSTANTS = {
  // Navigation
  NAV: {
    DASHBOARD: 'Dashboard',
    ANALYTICS: 'Analytics',
    REPORTS: 'Reports',
    SETTINGS: 'Settings',
    PROFILE: 'Profile',
    LOREM_ASSETS: 'Lorem',
    LOREM_REPORTS: 'Lorem',
    VULNERABILITIES: 'Vulnerabilities',
    INTEGRATION: 'Integration',
    REPORT: 'Report',
    ALERTS: 'Alerts',
    USER_NAME_1: 'Lorem',
    USER_NAME_2: 'Lorem',
    PROFILE_TOOLTIP: 'Profile',
  },

  // Dashboard
  DASHBOARD: {
    TITLE: 'Dashboard',
    LOREM_IPSUM_DOLOR_SIT: 'Lorem Ipsum Dolor Sit',
    LOREM_LOREM_LOREM: 'Lorem Lorem Lorem',
  },

  // Description Section
  DESCRIPTION: {
    TITLE: 'Description',
    CONTENT: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`,
  },

  // Extra Section
  EXTRA: {
    TITLE: 'Extra',
    SUBTITLE: 'Lorem Ipsum Dolor Sit',
    CONTENT: `Additional information about the system configuration and security posture. This section provides comprehensive details about the current state of the infrastructure and any relevant technical specifications that may impact security assessments.`,
    INFO_LABELS: {
      LOREM_IPSUM_DOLOR_1: 'Lorem Ipsum Dolor',
      LOREM_IPSUM_DOLOR_2: 'Lorem Ipsum Dolor',
      LOREM_IPSUM_DOLOR_3: 'Lorem Ipsum Dolor',
      LOREM_IPSUM_DOLOR_4: 'Lorem Ipsum Dolor',
      LOREM_IPSUM_DOLOR_5: 'Lorem Ipsum Dolor',
      LOREM_IPSUM_DOLOR_6: 'Lorem Ipsum Dolor',
    },
    INFO_VALUES: {
      DATE_VALUE: '10/19/2017',
      UT_VALUE: 'Ut',
      EROS_VALUE: 'Eros',
      YES_VALUE: 'Yes',
      SIT_VALUE: 'Sit',
      LOREM_VALUE: 'Lorem Ipsum Dolor',
    },
    CARDS: {
      CARD_TITLE_1: 'Card Title 1',
      CARD_TITLE_2: 'Card Title 2',
      SERVER: 'Server',
      CARD_CONTENT_1: 'Card Content 1',
      CARD_CONTENT_2: 'Card Content 2',
      CARD_DESCRIPTION_1:
        'Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.',
      CARD_DESCRIPTION_2:
        'Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.',
    },
  },

  // Risk Summary
  RISK_SUMMARY: {
    TITLE: 'Contextual Risk',
    LEVELS: {
      CRITICAL: 'Critical',
      HIGH: 'High',
      MEDIUM: 'Medium',
      LOW: 'Low',
    },
    COUNTS: {
      CRITICAL: '2',
      HIGH: '0',
      MEDIUM: '0',
      LOW: '0',
    },
    TOTAL: '2',
  },

  // Contextual Risk
  CONTEXTUAL_RISK: {
    TITLE: 'Contextual Risk Assessment',
    TABLE_HEADERS: {
      ASSET: 'Asset',
      CONTEXTUAL_RISK: 'Contextual Risk',
    },
    PAGINATION: {
      SHOWING: 'Showing',
      OF: 'of',
    },
  },

  // Asset Flow
  ASSET_FLOW: {
    TITLE: 'Asset Flow Diagram',
    LEGEND: {
      CRITICAL: 'Critical Risk',
      WARNING: 'Warning',
      LOW: 'Low Risk',
    },
  },

  // Asset Names (keeping dummy names as requested)
  ASSETS: {
    LOREM_IPSUM_DOLOR_SIT: 'Loremipsumdolorsit',
    LOREM_IPSUM_DOLOR_SIT_002: 'Loremipsumdolorsit002',
    WEB_SERVER_PRODUCTION: 'WebServer-Production',
    DATABASE_SERVER_MAIN: 'DatabaseServer-Main',
    LOAD_BALANCER_PRIMARY: 'LoadBalancer-Primary',
    API_GATEWAY_V2: 'APIGateway-v2',
    FILE_SERVER_BACKUP: 'FileServer-Backup',
    MONITORING_SERVER: 'MonitoringServer',
    AUTHENTICATION_SERVER: 'AuthenticationServer',
    CACHE_SERVER_REDIS: 'CacheServer-Redis',
    MESSAGE_QUEUE_RABBITMQ: 'MessageQueue-RabbitMQ',
    SEARCH_ENGINE_ELASTIC: 'SearchEngine-Elastic',
    CDN_DISTRIBUTION: 'CDN-Distribution',
    BACKUP_SERVER_SECONDARY: 'BackupServer-Secondary',
    LOGGING_SERVER_ELK: 'LoggingServer-ELK',
  },

  // Common
  COMMON: {
    LOADING: 'Loading...',
    ERROR: 'Error',
    SUCCESS: 'Success',
    CANCEL: 'Cancel',
    CONFIRM: 'Confirm',
    SAVE: 'Save',
    EDIT: 'Edit',
    DELETE: 'Delete',
    CLOSE: 'Close',
    PREVIOUS: 'Previous',
    NEXT: 'Next',
  },

  // Error Messages
  ERRORS: {
    GENERIC: 'An unexpected error occurred',
    NETWORK: 'Network connection error',
    NOT_FOUND: 'Resource not found',
    UNAUTHORIZED: 'Unauthorized access',
    VALIDATION: 'Validation error',
  },
};

export type TextConstants = typeof TEXT_CONSTANTS;
