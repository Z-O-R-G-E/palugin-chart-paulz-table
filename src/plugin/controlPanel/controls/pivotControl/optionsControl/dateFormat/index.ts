import {
  ControlSetItem,
  D3_TIME_FORMAT_OPTIONS,
} from '@superset-ui/chart-controls';
import { smartDateFormatter, t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const dateFormat: ControlSetItem = {
  name: 'date_format',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Date format'),
    visibility: isPivotType,
    default: smartDateFormatter.id,
    renderTrigger: true,
    choices: D3_TIME_FORMAT_OPTIONS,
    description: t('D3 time format for datetime columns'),
  },
};
