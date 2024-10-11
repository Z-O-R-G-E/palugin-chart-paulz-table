import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  adhocFilters,
  allColumns,
  groupby,
  groupbyColumns,
  groupbyRows,
  metricsLayout,
  metricsPivot,
  metricsStraight,
  orderByCols,
  orderDesc,
  percentMetrics,
  queryMode,
  rowLimitPivot,
  rowLimitStraight,
  seriesLimit,
  seriesLimitMetric,
  serverPageLength,
  serverPagination,
  showTotals,
  temporalColumnsLookup,
  timeGrainSqlaPivot,
  timeGrainSqlaStraight,
  timeseriesLimitMetric,
} from '../../controls';

export const querySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  controlSetRows: [
    /*Straight*/
    [queryMode],
    [groupby],
    [timeGrainSqlaStraight],
    [metricsStraight, allColumns],
    [percentMetrics],
    [timeseriesLimitMetric, orderByCols],
    [serverPagination],
    [rowLimitStraight, serverPageLength],
    [showTotals],
    /*Pivot*/
    [groupbyColumns],
    [groupbyRows],
    [timeGrainSqlaPivot],
    [metricsPivot],
    [metricsLayout],
    [seriesLimit],
    [rowLimitPivot],
    [seriesLimitMetric],
    /*General*/
    [temporalColumnsLookup],
    [adhocFilters],
    [orderDesc],
  ],
};
