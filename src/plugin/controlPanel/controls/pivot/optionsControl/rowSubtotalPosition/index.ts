import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowSubtotalPosition: ControlSetItem = {
  name: 'rowSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Промежуточный итог по строкам'),
    default: false,
    choices: [
      [true, t('Сверху')],
      [false, t('Снизу')],
    ],
    renderTrigger: true,
    description: t('Позиция промежуточного итога уровня'),
  },
};
