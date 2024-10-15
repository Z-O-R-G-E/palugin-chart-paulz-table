import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const showCellBars: ControlSetItem = {
  name: 'showCellBars',
  config: {
    type: 'CheckboxControl',
    label: t('Клеточные бары'),
    renderTrigger: true,
    default: true,
    description: t('Отображать ли фон гистограммы в столбцах таблицы'),
  },
};
