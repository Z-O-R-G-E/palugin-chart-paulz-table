import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import {
  aggregateFunction,
  colOrder,
  colSubTotals,
  colSubtotalPosition,
  colTotals,
  combineMetric,
  conditionalFormattingPivot,
  currencyFormat,
  dateFormat,
  rowOrder,
  rowSubTotals,
  rowSubtotalPosition,
  rowTotals,
  transposePivot,
  valueFormat,
} from '../../../controls';
import { isPivotType } from '../../../utils';

export const pivotOptionsSection: ControlPanelSectionConfig = {
  label: t('Настройки'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  controlSetRows: [
    [aggregateFunction],
    [rowTotals],
    [rowSubTotals],
    [colTotals],
    [colSubTotals],
    [transposePivot],
    [combineMetric],
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
