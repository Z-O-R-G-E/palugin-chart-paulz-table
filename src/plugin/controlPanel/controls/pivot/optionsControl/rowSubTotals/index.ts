import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowSubTotals: ControlSetItem = {
  name: 'rowSubTotals',
  config: {
    type: 'CheckboxControl',
    label: t('Показать промежуточные итоги по строкам'),
    default: false,
    renderTrigger: true,
    description: t('Отображение промежуточного итога на уровне строки'),
  },
};
