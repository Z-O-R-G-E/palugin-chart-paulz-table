import { t } from '@superset-ui/core';
import { groupby, metricsStraight, orderByCols, orderDesc, queryMode, rowLimitStraight, serverPageLength, serverPagination, showTotals, timeGrainSqlaStraight, timeseriesLimitMetric, percentMetrics, allColumns } from '../../controls';
export var querySection = {
  label: t('Запрос'),
  expanded: true,
  controlSetRows: [[queryMode], [groupby], [metricsStraight, allColumns], [percentMetrics], [timeseriesLimitMetric, orderByCols], [orderDesc], [showTotals], [timeGrainSqlaStraight, 'temporal_columns_lookup'], ['adhoc_filters'], [serverPagination], [rowLimitStraight, serverPageLength]]
};