import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowSubtotalPosition: ControlSetItem = {
  name: 'rowSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Промежуточный итог по строкам'),
    visibility: isPivotType,
    default: false,
    choices: [
      [true, t('Сверху')],
      [false, t('Снизу')],
    ],
    renderTrigger: true,
    description: t('Позиция промежуточного итога уровня'),
  },
};
