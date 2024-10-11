import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isAggMode, isPivotType, isStraightType } from '../../../../utils';

export const orderDesc: ControlSetItem = {
  name: 'orderDesc',
  config: {
    type: 'CheckboxControl',
    label: t('Sort descending'),
    default: true,
    description: t('Whether to sort descending or ascending'),
    visibility: ({ controls }) => {
      return (
        (isAggMode({ controls }) && isStraightType({ controls })) ||
        isPivotType({ controls })
      );
    },
    resetOnHide: false,
  },
};
