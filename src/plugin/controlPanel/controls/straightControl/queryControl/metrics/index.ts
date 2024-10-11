import {
  ColumnMeta,
  ControlPanelState,
  ControlSetItem,
  ControlState,
  Dataset,
  defineSavedMetrics,
} from '@superset-ui/chart-controls';

import {
  isAggMode,
  isStraightType,
  validateAggControlValues,
} from '../../../../utils';

export const metrics: ControlSetItem = {
  name: 'metrics',
  override: {
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
