import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const colorPn: ControlSetItem = {
  name: 'colorPn',
  config: {
    type: 'CheckboxControl',
    label: t('Цвет +/-'),
    renderTrigger: true,
    default: true,
    visibility: isStraightType,
    description: t(
      'Раскрашивать ли числовые значения в зависимости от того, являются ли они положительными или отрицательными',
    ),
  },
};
