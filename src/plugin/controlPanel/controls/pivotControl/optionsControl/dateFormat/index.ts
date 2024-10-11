import {
  ControlSetItem,
  D3_TIME_FORMAT_OPTIONS,
} from '@superset-ui/chart-controls';
import { smartDateFormatter, t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const dateFormat: ControlSetItem = {
  name: 'dateFormat',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Формат даты'),
    visibility: isPivotType,
    default: smartDateFormatter.id,
    renderTrigger: true,
    choices: D3_TIME_FORMAT_OPTIONS,
    description: t('Формат времени D3 для столбцов даты и времени'),
  },
};
