import {
  ControlSetItem,
  D3_TIME_FORMAT_OPTIONS,
} from '@superset-ui/chart-controls';
import { smartDateFormatter, t } from '@superset-ui/core';

export const tableTimestampFormat: ControlSetItem = {
  name: 'tableTimestampFormat',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Формат временной метки'),
    default: smartDateFormatter.id,
    renderTrigger: true,
    clearable: false,
    choices: D3_TIME_FORMAT_OPTIONS,
    description: t('Формат времени D3 для столбцов даты и времени'),
  },
};
