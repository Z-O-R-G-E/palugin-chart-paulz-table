import {
  ColumnMeta,
  ControlPanelState,
  ControlSetItem,
  ControlState,
  Dataset,
  defineSavedMetrics,
  sharedControls,
} from '@superset-ui/chart-controls';

import {
  isAggMode,
  isStraightType,
  validateAggControlValues,
} from '../../../../utils';
import { t } from '@superset-ui/core';

export const metrics: ControlSetItem = {
  name: 'metrics',
  config: {
    ...sharedControls.metrics,
    label: t('Метрики'),
    validators: [],
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
    mapStateToProps: (
      { controls, datasource, form_data }: ControlPanelState,
      controlState: ControlState,
    ) => ({
      columns: datasource?.columns[0]?.hasOwnProperty('filterable')
        ? (datasource as Dataset)?.columns?.filter(
            (c: ColumnMeta) => c.filterable,
          )
        : datasource?.columns,
      savedMetrics: defineSavedMetrics(datasource),
      selectedMetrics:
        form_data.metrics || (form_data.metric ? [form_data.metric] : []),
      datasource,
      externalValidationErrors: validateAggControlValues(controls, [
        controls.groupby?.value,
        controls.percentMetrics?.value,
        controlState.value,
      ]),
    }),
    rerender: ['groupby', 'percentMetrics'],
  },
};
