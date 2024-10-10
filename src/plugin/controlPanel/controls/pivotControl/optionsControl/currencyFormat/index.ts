import { ControlSetItem } from '@superset-ui/chart-controls';
import { isPivotType } from '../../../../utils';

export const currencyFormat: ControlSetItem = {
  name: 'currency_format',
  override: { visibility: isPivotType },
};
