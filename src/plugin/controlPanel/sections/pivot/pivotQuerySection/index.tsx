import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  adhocFilters,
  groupbyColumns,
  groupbyRows,
  metricsLayout,
  metricsPivot,
  orderDesc,
  rowLimitPivot,
  seriesLimit,
  seriesLimitMetric,
  temporalColumnsLookup,
  timeGrainSqlaPivot,
} from '../../../controls';
import { isPivotType } from '../../../utils';

export const pivotQuerySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  controlSetRows: [
    [groupbyColumns],
    [groupbyRows],
    [timeGrainSqlaPivot],
    [metricsPivot],
    [metricsLayout],
    [seriesLimit],
    [rowLimitPivot],
    [seriesLimitMetric],
    /*general*/
    [temporalColumnsLookup],
    [adhocFilters],
    [orderDesc],
  ],
};
