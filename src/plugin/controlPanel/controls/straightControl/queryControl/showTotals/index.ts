import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { isAggMode, isStraightType } from '../../../../utils';

export const showTotals: ControlSetItem = {
  name: 'show_totals',
  config: {
    type: 'CheckboxControl',
    label: t('Show totals'),
    default: false,
    description: t(
      'Show total aggregations of selected metrics. Note that row limit does not apply to the result.',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
  },
};
