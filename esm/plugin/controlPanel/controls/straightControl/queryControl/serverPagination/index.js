import { t } from '@superset-ui/core';
export var serverPagination = {
  name: 'server_pagination',
  config: {
    type: 'CheckboxControl',
    label: t('Server pagination'),
    description: t('Enable server side pagination of results (experimental feature)'),
    default: false
  }
};