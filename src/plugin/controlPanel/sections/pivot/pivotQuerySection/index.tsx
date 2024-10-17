import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {
  adhocFilters,
  aggregateFunction,
  colSubTotals,
  colTotals,
  combineMetric,
  groupbyColumns,
  groupbyRows,
  metricsLayout,
  metricsPivot,
  orderDesc,
  rowLimitPivot,
  rowSubTotals,
  rowTotals,
  seriesLimit,
  seriesLimitMetric,
  temporalColumnsLookup,
  timeGrainSqlaPivot,
  transposePivot,
} from '../../../controls';
import { isPivotType } from '../../../utils';

const pivotQueryDataSection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  controlSetRows: [
    [groupbyColumns],
    [groupbyRows],
    [timeGrainSqlaPivot, temporalColumnsLookup],
    [metricsPivot],
    [metricsLayout],
    [adhocFilters],
    [seriesLimit],
    [rowLimitPivot],
    [seriesLimitMetric],
    [orderDesc],
  ],
};

const pivotQueryOptionsSection: ControlPanelSectionConfig = {
  label: t('Опции'),
  expanded: true,
  visibility: ({ controls }) => isPivotType({ controls }),
  tabOverride: 'data',
  controlSetRows: [
    [aggregateFunction],
    [rowTotals],
    [rowSubTotals],
    [colTotals],
    [colSubTotals],
    [transposePivot],
    [combineMetric],
  ],
};

export const pivotQuerySection: ControlPanelSectionConfig[] = [
  pivotQueryDataSection,
  pivotQueryOptionsSection,
];
