import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';

export const adhocFilters: ControlSetItem = {
  name: 'adhocFilters',
  config: {
    ...sharedControls.adhoc_filters,
  },
};
