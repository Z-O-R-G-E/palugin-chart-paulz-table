import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const includeSearch: ControlSetItem = {
  name: 'include_search',
  config: {
    type: 'CheckboxControl',
    label: t('Search box'),
    renderTrigger: true,
    default: false,
    description: t('Whether to include a client-side search box'),
    visibility: isStraightType,
  },
};
