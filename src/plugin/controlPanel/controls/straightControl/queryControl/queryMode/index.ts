import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { QueryMode, QueryModeLabel } from '../../../../consts';
import { getQueryMode, isStraightType } from '../../../../utils';

export const queryMode: ControlSetItem = {
  name: 'query_mode',
  config: {
    type: 'RadioButtonControl',
    label: t('Тип запроса'),
    default: null,
    options: [
      [QueryMode.aggregate, QueryModeLabel[QueryMode.aggregate]],
      [QueryMode.raw, QueryModeLabel[QueryMode.raw]],
    ],
    mapStateToProps: ({ controls }) => ({ value: getQueryMode(controls) }),
    visibility: isStraightType,
    rerender: ['all_columns', 'groupby', 'metrics', 'percent_metrics'],
  },
};
