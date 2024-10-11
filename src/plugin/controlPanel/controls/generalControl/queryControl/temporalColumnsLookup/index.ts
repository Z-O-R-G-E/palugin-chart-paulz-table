import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const temporalColumnsLookup: ControlSetItem = {
  name: 'temporalColumnslookup',
  config: {
    ...sharedControls.temporal_columns_lookup,
    label: t('Поиск временных столбцов'),
  },
};
