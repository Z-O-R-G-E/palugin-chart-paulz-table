import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { QueryModeLabel } from '../../../../consts';
import { getQueryMode } from '../../../../utils';
import { QueryMode } from '../../../../../../consts';

export const queryMode: ControlSetItem = {
  name: 'queryMode',
  config: {
    type: 'RadioButtonControl',
    label: t('Тип запроса'),
    default: null,
    options: [
      [QueryMode.aggregate, QueryModeLabel[QueryMode.aggregate]],
      [QueryMode.raw, QueryModeLabel[QueryMode.raw]],
    ],
    mapStateToProps: ({ controls }) => ({ value: getQueryMode(controls) }),
    rerender: ['allColumns', 'groupby', 'metrics', 'percentMetrics'],
  },
};
