import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';
export var allowRearrangeColumns = {
  name: 'allow_rearrange_columns',
  config: {
    type: 'CheckboxControl',
    label: t('Allow columns to be rearranged'),
    renderTrigger: true,
    default: false,
    visibility: isStraightType,
    description: t("Allow end user to drag-and-drop column headers to rearrange them. Note their changes won't persist for the next time they open the chart.")
  }
};