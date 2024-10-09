import {
  ChartProps,
  ContextMenuFilters,
  Currency,
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

export interface PivotTableStylesProps {}

export interface PivotTableTransformedProps {
  groupbyRows: QueryFormColumn[];
  groupbyColumns: QueryFormColumn[];
  metrics: QueryFormMetric[];
  tableRenderer: string;
  colOrder: string;
  rowOrder: string;
  aggregateFunction: string;
  transposePivot: boolean;
  combineMetric: boolean;
  rowSubtotalPosition: boolean;
  colSubtotalPosition: boolean;
  colTotals: boolean;
  colSubTotals: boolean;
  rowTotals: boolean;
  rowSubTotals: boolean;
  valueFormat: string;
  currencyFormat: Currency;
  emitCrossFilters?: boolean;
  setDataMask: SetDataMaskHook;
  selectedFilters?: SelectedFiltersType;
  verboseMap: JsonObject;
  columnFormats: JsonObject;
  currencyFormats: Record<string, Currency>;
  metricsLayout?: MetricsLayoutEnum;
  metricColorFormatters: ColorFormatters;
  dateFormatters: Record<string, DateFormatter | undefined>;
  onContextMenu?: (
    clientX: number,
    clientY: number,
    filters?: ContextMenuFilters,
  ) => void;
  timeGrainSqla?: TimeGranularity;
}

export type PivotTableCustomizeProps = {
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

export type PivotTableFormData = PivotTableStylesProps &
  QueryFormData &
  PivotTableCustomizeProps & {
    groupbyColumns?: QueryFormColumn[];
    groupbyRows?: QueryFormColumn[];
    timeGrainSqla?: TimeGranularity;
    metrics?: QueryFormMetric[];
    metricsLayout?: MetricsLayoutEnum;
    rowLimit?: number;
    seriesLimitMetric?: QueryFormMetric[] | QueryFormMetric | null;
    orderDesc?: boolean;
  };

export type PivotTableProps = ChartProps & PivotTableStylesProps;

export enum MetricsLayoutEnum {
  ROWS = 'ROWS',
  COLUMNS = 'COLUMNS',
}

export type DateFormatter =
  | TimeFormatter
  | NumberFormatter
  | ((value: DataRecordValue) => string);

export type FilterType = Record<string, DataRecordValue>;
export type SelectedFiltersType = Record<string, DataRecordValue[]>;
