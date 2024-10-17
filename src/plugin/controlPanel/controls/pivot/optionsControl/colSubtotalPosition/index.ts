import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const colSubtotalPosition: ControlSetItem = {
  name: 'colSubtotalPosition',
  config: {
    type: 'SelectControl',
    label: t('Расположение столбцов подытогов'),
    default: false,
    choices: [
      [true, t('Слева')],
      [false, t('Справа')],
    ],
    renderTrigger: true,
    description: t('Расположение промежуточного итога на уровне столбца'),
  },
};
