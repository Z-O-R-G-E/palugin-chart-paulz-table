import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowTotals: ControlSetItem = {
  name: 'rowTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать общее количество строк'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Отображать итог на уровне строки'),
  },
};
