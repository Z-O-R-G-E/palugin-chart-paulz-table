import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colSubtotalPosition: ControlSetItem = {
  name: 'colSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Позиция промежуточного итога столбцов'),
    default: false,
    choices: [
      [true, t('Лево')],
      [false, t('Право')],
    ],
    renderTrigger: true,
    description: t('Позиция промежуточного итога на уровне столбца'),
  },
};
