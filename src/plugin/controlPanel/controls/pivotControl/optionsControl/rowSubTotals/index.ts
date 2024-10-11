import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const rowSubTotals: ControlSetItem = {
  name: 'rowSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать промежуточные итоги по строкам'),
    visibility: isPivotType,
    default: false,
    renderTrigger: true,
    description: t('Отображение промежуточного итога на уровне строки'),
  },
};
