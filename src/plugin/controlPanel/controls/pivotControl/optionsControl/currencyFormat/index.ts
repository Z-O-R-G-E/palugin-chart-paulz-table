import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { isPivotType } from '../../../../utils';
import { t } from '@superset-ui/core';

export const currencyFormat: ControlSetItem = {
  name: 'currencyFormat',
  config: {
    ...sharedControls.currency_format,
    label: t('Формат валюты'),
    visibility: isPivotType,
  },
};
