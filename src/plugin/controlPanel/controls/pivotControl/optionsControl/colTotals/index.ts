import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const colTotals: ControlSetItem = {
  name: 'colTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общее количество столбцов'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Отображение итогового уровня столбца'),
  },
};
