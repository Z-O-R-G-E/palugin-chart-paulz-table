import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { isPivotType } from '../../../../utils';

export const currencyFormat: ControlSetItem = {
  name: 'currencyFormat',
  config: {
    ...sharedControls.currency_format,
    visibility: isPivotType,
  },
};
