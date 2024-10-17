import { ControlSetItem } from '@superset-ui/chart-controls';
import { smartDateFormatter, t } from '@superset-ui/core';
import { D3_TIME_FORMAT_OPTIONS } from '../../../../consts';

export const dateFormat: ControlSetItem = {
  name: 'dateFormat',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Формат даты'),
    default: smartDateFormatter.id,
    renderTrigger: true,
    choices: D3_TIME_FORMAT_OPTIONS,
    description: t('Формат времени D3 для столбцов даты и времени'),
  },
};
