import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowLimit: ControlSetItem = {
  name: 'rowLimit',
  config: {
    ...sharedControls.row_limit,
    label: t('Лимит ячеек'),
    description: t('Ограничивает количество извлекаемых ячеек.'),
  },
};
