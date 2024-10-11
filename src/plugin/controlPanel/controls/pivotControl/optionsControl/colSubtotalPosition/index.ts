import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const colSubtotalPosition: ControlSetItem = {
  name: 'colSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Позиция промежуточного итога столбцов'),
    visibility: isPivotType,
    default: false,
    choices: [
      [true, t('Лево')],
      [false, t('Право')],
    ],
    renderTrigger: true,
    description: t('Позиция промежуточного итога на уровне столбца'),
  },
};
