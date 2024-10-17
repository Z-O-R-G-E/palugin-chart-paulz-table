import { ControlSetItem } from '@superset-ui/chart-controls';
import { smartDateFormatter, t } from '@superset-ui/core';
import { D3_TIME_FORMAT_OPTIONS } from '../../../../consts';

export const tableTimestampFormat: ControlSetItem = {
  name: 'tableTimestampFormat',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Формат даты и времени'),
    default: smartDateFormatter.id,
    renderTrigger: true,
    clearable: false,
    choices: D3_TIME_FORMAT_OPTIONS,
    description: t('Формат времени D3 для столбцов даты и времени'),
  },
};
