import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const includeSearch: ControlSetItem = {
  name: 'includeSearch',
  config: {
    type: 'CheckboxControl',
    label: t('Поле поиска'),
    renderTrigger: true,
    default: false,
    description: t('Включить ли окно поиска на стороне клиента'),
  },
};
