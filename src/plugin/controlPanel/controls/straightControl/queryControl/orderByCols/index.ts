import { ControlSetItem, Dataset } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { isRawMode, isStraightType } from '../../../../utils';

export const orderByCols: ControlSetItem = {
  name: 'orderByCols',
  config: {
    type: 'SelectControl',
    label: t('Ordering'),
    description: t('Order results by selected columns'),
    multi: true,
    default: [],
    mapStateToProps: ({ datasource }) => ({
      choices: datasource?.hasOwnProperty('order_by_choices')
        ? (datasource as Dataset)?.order_by_choices
        : datasource?.columns || [],
    }),
    visibility: ({ controls }) => {
      return isRawMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
  },
};
