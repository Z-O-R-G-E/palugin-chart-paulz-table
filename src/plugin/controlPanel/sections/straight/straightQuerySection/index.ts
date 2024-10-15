import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  adhocFilters,
  allColumns,
  groupby,
  metricsStraight,
  orderByCols,
  orderDesc,
  percentMetrics,
  queryMode,
  rowLimitStraight,
  serverPageLength,
  serverPagination,
  showTotals,
  temporalColumnsLookup,
  timeGrainSqlaStraight,
  timeseriesLimitMetric,
} from '../../../controls';
import { isStraightType } from '../../../utils';

export const straightQuerySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  visibility: ({ controls }) => isStraightType({ controls }),
  controlSetRows: [
    [queryMode],
    [groupby],
    [timeGrainSqlaStraight],
    [metricsStraight, allColumns],
    [percentMetrics],
    [timeseriesLimitMetric, orderByCols],
    [serverPagination],
    [rowLimitStraight, serverPageLength],
    [showTotals],
    /*general*/
    [temporalColumnsLookup],
    [adhocFilters],
    [orderDesc],
  ],
};
