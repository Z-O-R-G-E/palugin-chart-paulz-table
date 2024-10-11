import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const orderDesc: ControlSetItem = {
  name: 'orderDesc',
  config: {
    type: 'CheckboxControl',
    label: t('Сортировать по убыванию'),
    visibility: isPivotType,
    default: true,
    description: t('Сортировать по убыванию или по возрастанию'),
  },
};
