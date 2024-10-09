import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import {
  groupby,
  metricsStraight,
  orderByCols,
  orderDesc,
  queryMode,
  rowLimitStraight,
  serverPageLength,
  serverPagination,
  showTotals,
  timeGrainSqlaStraight,
  timeseriesLimitMetric,
  percentMetrics,
  allColumns,
  temporalColumnsLookup,
  adhocFilters,
} from '../../controls';

export const querySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  controlSetRows: [
    [queryMode],
    [groupby],
    [metricsStraight, allColumns],
    [percentMetrics],
    [timeseriesLimitMetric, orderByCols],
    [orderDesc],
    [showTotals],
    [timeGrainSqlaStraight, temporalColumnsLookup],
    [adhocFilters],
    [serverPagination],
    [rowLimitStraight, serverPageLength],
  ],
};
