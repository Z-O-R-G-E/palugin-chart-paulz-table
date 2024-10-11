import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isAggMode, isPivotType, isStraightType } from '../../../../utils';

export const orderDesc: ControlSetItem = {
  name: 'orderDesc',
  config: {
    type: 'CheckboxControl',
    label: t('Сортировать по убыванию'),
    default: true,
    description: t('Сортировать по убыванию или по возрастанию'),
    visibility: ({ controls }) => {
      return (
        (isAggMode({ controls }) && isStraightType({ controls })) ||
        isPivotType({ controls })
      );
    },
    resetOnHide: false,
  },
};
