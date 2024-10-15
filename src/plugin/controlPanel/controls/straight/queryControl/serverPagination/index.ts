import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const serverPagination: ControlSetItem = {
  name: 'serverPagination',
  config: {
    type: 'CheckboxControl',
    label: t('Серверная пагинация'),
    description: t(
      'Включить разбивку результатов на стороне сервера (экспериментальная функция)',
    ),
    default: false,
  },
};
