import { t } from '@superset-ui/core';
import { tableTimestampFormat, pageLength, includeSearch, showCellBars, alignPn, colorPn, allowRearrangeColumns, columnConfig, conditionalFormatting } from '../../controls';
export var customizeSection = {
  label: t('Настройки'),
  expanded: true,
  controlSetRows: [[tableTimestampFormat], [pageLength, null], [includeSearch, showCellBars], [alignPn, colorPn], [allowRearrangeColumns], [columnConfig], [conditionalFormatting]]
};