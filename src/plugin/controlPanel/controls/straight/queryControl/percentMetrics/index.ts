import {
  ControlSetItem,
  defineSavedMetrics,
  sharedControls,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import {
  getQueryMode,
  isAggMode,
  validateAggControlValues,
} from '../../../../utils';

export const percentMetrics: ControlSetItem = {
  name: 'percentMetrics',
  config: {
    ...sharedControls.metrics,
    label: t('Процентные меры'),
    description: t(
      'Метрики, для которых должен отображаться процент от общего числа. Рассчитывается только на основе данных, находящихся в пределах строки.',
    ),
    visibility: ({ controls }) => {
      return isAggMode({ controls });
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
          controls.dimension?.value,
          controls.metrics?.value,
          controlState?.value,
        ]),
      };
    },
    rerender: ['dimension', 'metrics'],
    default: [],
    validators: [],
  } as typeof sharedControls.metrics,
};
