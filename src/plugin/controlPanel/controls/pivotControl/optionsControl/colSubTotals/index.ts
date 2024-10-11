import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const colSubTotals: ControlSetItem = {
  name: 'colSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать промежуточный итог столбцов'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Отобразить промежуточный итог на уровне столбца'),
  },
};
