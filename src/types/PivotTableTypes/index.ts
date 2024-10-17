import {
  ChartProps,
  ContextMenuFilters,
  Currency,
  DataRecord,
  DataRecordValue,
  JsonObject,
  NumberFormatter,
  QueryFormColumn,
  QueryFormData,
  QueryFormMetric,
  SetDataMaskHook,
  TimeFormatter,
  TimeGranularity,
} from '@superset-ui/core';
import { ColorFormatters } from '@superset-ui/chart-controls';
import { MetricsLayoutEnum } from '../../consts';

export type DateFormatter =
  | TimeFormatter
  | NumberFormatter
  | ((value: DataRecordValue) => string);

export type FilterType = Record<string, DataRecordValue>;
export type SelectedFiltersType = Record<string, DataRecordValue[]>;

/*-----------------------------------------*/

export type PivotTableOptionsProps = {
  aggregateFunction?: boolean;
  rowTotals?: boolean;
  rowSubTotals?: boolean;
  colTotals?: boolean;
  colSubTotals?: boolean;
  transposePivot?: boolean;
  combineMetric?: boolean;
  valueFormat?: string;
  dateFormat?: string;
  rowOrder?: string;
  colOrder?: string;
  rowSubtotalPosition?: boolean;
  colSubtotalPosition?: boolean;
  conditionalFormatting?: ColorFormatters;
};

export type PivotTableFormData = QueryFormData &
  PivotTableOptionsProps & {
    groupbyColumns?: QueryFormColumn[];
    groupbyRows?: QueryFormColumn[];
    timeGrainSqla?: TimeGranularity;
    metrics?: QueryFormMetric[];
    metricsLayout?: MetricsLayoutEnum;
    rowLimit?: number;
    seriesLimitMetric?: QueryFormMetric[] | QueryFormMetric | null;
    orderDesc?: boolean;
  };

export interface PivotTableStylesProps {}

export interface PivotTableTransformedProps {
  data: DataRecord[];
  groupbyRows?: QueryFormColumn[];
  groupbyColumns?: QueryFormColumn[];
  metrics?: QueryFormMetric[];
  tableRenderer?: string;
  colOrder?: string;
  rowOrder?: string;
  aggregateFunction?: string;
  transposePivot?: boolean;
  combineMetric?: boolean;
  rowSubtotalPosition?: boolean;
  colSubtotalPosition?: boolean;
  colTotals?: boolean;
  colSubTotals?: boolean;
  rowTotals?: boolean;
  rowSubTotals?: boolean;
  valueFormat?: string;
  currencyFormat?: Currency;
  emitCrossFilters?: boolean;
  setDataMask?: SetDataMaskHook;
  selectedFilters?: SelectedFiltersType;
  verboseMap?: JsonObject;
  columnFormats?: JsonObject;
  currencyFormats?: Record<string, Currency>;
  metricsLayout?: MetricsLayoutEnum;
  metricColorFormatters?: ColorFormatters;
  dateFormatters?: Record<string, DateFormatter | undefined>;
  onContextMenu?: (
    clientX: number,
    clientY: number,
    filters?: ContextMenuFilters,
  ) => void;
  timeGrainSqla?: TimeGranularity;
}

export type PivotTableProps = ChartProps;
