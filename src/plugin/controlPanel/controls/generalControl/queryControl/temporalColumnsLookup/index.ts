import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';

export const temporalColumnsLookup: ControlSetItem = {
  name: 'temporalColumnslookup',
  config: { ...sharedControls.temporal_columns_lookup },
};
