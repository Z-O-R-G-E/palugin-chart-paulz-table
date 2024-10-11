import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';

export const seriesLimit: ControlSetItem = {
  name: 'seriesLimit',
  config: { ...sharedControls.series_limit },
};
