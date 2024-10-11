import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const includeSearch: ControlSetItem = {
  name: 'includeSearch',
  config: {
    type: 'CheckboxControl',
    label: t('Search box'),
    renderTrigger: true,
    default: false,
    description: t('Whether to include a client-side search box'),
    visibility: isStraightType,
  },
};
