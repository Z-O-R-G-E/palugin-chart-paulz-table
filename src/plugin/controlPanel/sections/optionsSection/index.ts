import { t } from '@superset-ui/core';
import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';

import {
  tableTimestampFormat,
  pageLength,
  includeSearch,
  showCellBars,
  alignPn,
  colorPn,
  allowRearrangeColumns,
  columnConfig,
} from '../../controls';

export const customizeSection: ControlPanelSectionConfig = {
  label: t('Настройки'),
  expanded: true,
  controlSetRows: [
    [tableTimestampFormat],
    [pageLength, null],
    [includeSearch, showCellBars],
    [alignPn, colorPn],
    [allowRearrangeColumns],
    [columnConfig],
  ],
};
