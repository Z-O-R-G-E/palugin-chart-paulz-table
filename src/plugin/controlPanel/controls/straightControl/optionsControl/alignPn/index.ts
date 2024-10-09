import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const alignPn: ControlSetItem = {
  name: 'align_pn',
  config: {
    type: 'CheckboxControl',
    label: t('Align +/-'),
    renderTrigger: true,
    default: false,
    visibility: isStraightType,
    description: t(
      'Whether to align background charts with both positive and negative values at 0',
    ),
  },
};
