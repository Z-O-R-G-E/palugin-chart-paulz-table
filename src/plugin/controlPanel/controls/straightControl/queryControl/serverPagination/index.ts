import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const serverPagination: ControlSetItem = {
  name: 'serverPagination',
  config: {
    type: 'CheckboxControl',
    label: t('Серверная пагинация'),
    visibility: isStraightType,
    description: t(
      'Включить разбивку результатов на стороне сервера (экспериментальная функция)',
    ),
    default: false,
  },
};
