import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  adhocFilters,
  columnsRawMode,
  dimension,
  metricsStraight,
  orderByRawMode,
  orderDesc,
  percentMetrics,
  queryMode,
  rowLimitStraight,
  serverPageLength,
  serverPagination,
  showTotals,
  temporalColumnsLookup,
  timeGrainSqlaStraight,
  orderByAggMode,
} from '../../../controls';
import { isStraightType } from '../../../utils';

export const straightQuerySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  visibility: ({ controls }) => isStraightType({ controls }),
  controlSetRows: [
    [queryMode],
    [dimension],
    [timeGrainSqlaStraight, temporalColumnsLookup],
    [metricsStraight, columnsRawMode],
    [percentMetrics],
    [adhocFilters],
    [orderByAggMode, orderByRawMode],
    [serverPagination],
    [rowLimitStraight, serverPageLength],
    [orderDesc],
    [showTotals],
  ],
};
