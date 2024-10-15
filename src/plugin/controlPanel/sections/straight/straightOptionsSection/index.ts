import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import {
  alignPn,
  allowRearrangeColumns,
  colorPn,
  columnConfig,
  conditionalFormattingStraight,
  includeSearch,
  pageLength,
  showCellBars,
  tableTimestampFormat,
} from '../../../controls';
import { isStraightType } from '../../../utils';

export const straightOptionsSection: ControlPanelSectionConfig = {
  label: t('Настройки'),
  expanded: true,
  visibility: ({ controls }) => isStraightType({ controls }),
  controlSetRows: [
    [tableTimestampFormat],
    [pageLength],
    [includeSearch, showCellBars],
    [alignPn, colorPn],
    [allowRearrangeColumns],
    [columnConfig],
    [conditionalFormattingStraight],
  ],
};
