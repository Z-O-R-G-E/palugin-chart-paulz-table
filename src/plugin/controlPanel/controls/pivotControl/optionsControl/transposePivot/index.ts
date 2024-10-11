import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const transposePivot: ControlSetItem = {
  name: 'transposePivot',
  config: {
    type: 'CheckboxControl',
    label: t('Транспонировать точку поворота'),
    visibility: isPivotType,
    default: false,
    description: t('Поменять местами строки и столбцы'),
    renderTrigger: true,
  },
};
