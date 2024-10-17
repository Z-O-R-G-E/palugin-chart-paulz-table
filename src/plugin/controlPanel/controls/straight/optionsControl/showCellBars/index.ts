import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const showCellBars: ControlSetItem = {
  name: 'showCellBars',
  config: {
    type: 'CheckboxControl',
    label: t('Гистограммы в ячейках'),
    renderTrigger: true,
    default: true,
    description: t('Отображать гистограммы в колонках таблицы'),
  },
};
