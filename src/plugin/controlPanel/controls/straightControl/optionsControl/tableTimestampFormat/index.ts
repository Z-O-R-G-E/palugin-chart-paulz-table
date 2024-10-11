import {
  ControlSetItem,
  D3_TIME_FORMAT_OPTIONS,
} from '@superset-ui/chart-controls';
import { smartDateFormatter, t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const tableTimestampFormat: ControlSetItem = {
  name: 'tableTimestampFormat',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Timestamp format'),
    default: smartDateFormatter.id,
    renderTrigger: true,
    clearable: false,
    choices: D3_TIME_FORMAT_OPTIONS,
    description: t('D3 time format for datetime columns'),
    visibility: isStraightType,
  },
};
