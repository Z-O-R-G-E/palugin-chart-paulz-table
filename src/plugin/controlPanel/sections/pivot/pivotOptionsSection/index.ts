import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import {
  colOrder,
  colSubtotalPosition,
  conditionalFormattingPivot,
  currencyFormat,
  dateFormat,
  rowOrder,
  rowSubtotalPosition,
  valueFormat,
} from '../../../controls';
import { isPivotType } from '../../../utils';

export const pivotOptionsSection: ControlPanelSectionConfig = {
  label: t('Настройки'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  controlSetRows: [
    [valueFormat],
    [currencyFormat],
    [dateFormat],
    [rowOrder],
    [colOrder],
    [rowSubtotalPosition],
    [colSubtotalPosition],
    [conditionalFormattingPivot],
  ],
};
