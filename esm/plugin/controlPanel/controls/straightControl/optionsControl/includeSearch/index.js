import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';
export var includeSearch = {
  name: 'include_search',
  config: {
    type: 'CheckboxControl',
    label: t('Search box'),
    renderTrigger: true,
    default: false,
    description: t('Whether to include a client-side search box'),
    visibility: isStraightType
  }
};