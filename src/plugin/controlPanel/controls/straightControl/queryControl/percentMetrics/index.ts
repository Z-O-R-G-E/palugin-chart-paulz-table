import {
  ControlSetItem,
  defineSavedMetrics,
  sharedControls,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import {
  getQueryMode,
  isAggMode,
  isStraightType,
  validateAggControlValues,
} from '../../../../utils';

export const percentMetrics: ControlSetItem = {
  name: 'percentMetrics',
  config: {
    ...sharedControls.metrics,
    label: t('Percentage metrics'),
    description: t(
      'Metrics for which percentage of total are to be displayed. Calculated from only data within the row limit.',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
    mapStateToProps: ({ datasource, controls }, controlState) => {
      return {
        columns: datasource?.columns || [],
        savedMetrics: defineSavedMetrics(datasource),
        datasource,
        datasourceType: datasource?.type,
        queryMode: getQueryMode(controls),
        externalValidationErrors: validateAggControlValues(controls, [
          controls.groupby?.value,
          controls.metrics?.value,
          controlState?.value,
        ]),
      };
    },
    rerender: ['groupby', 'metrics'],
    default: [],
    validators: [],
  } as typeof sharedControls.metrics,
};
