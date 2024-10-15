import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const transposePivot: ControlSetItem = {
  name: 'transposePivot',
  config: {
    type: 'CheckboxControl',
    label: t('Транспонировать точку поворота'),
    default: false,
    description: t('Поменять местами строки и столбцы'),
    renderTrigger: true,
  },
};
