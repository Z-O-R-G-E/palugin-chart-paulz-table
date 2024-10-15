import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const alignPn: ControlSetItem = {
  name: 'alignPn',
  config: {
    type: 'CheckboxControl',
    label: t('Выровнять +/-'),
    renderTrigger: true,
    default: false,
    description: t(
      'Следует ли выравнивать фоновые диаграммы как с положительными, так и с отрицательными значениями в 0.',
    ),
  },
};
