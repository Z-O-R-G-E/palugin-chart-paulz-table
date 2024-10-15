import {
  ChartDataResponseResult,
  ChartProps,
  ContextMenuFilters,
  Currency,
  CurrencyFormatter,
  DataRecord,
  DataRecordFilters,
  DataRecordValue,
  GenericDataType,
  NumberFormatter,
  QueryFormData,
  QueryFormMetric,
  SetDataMaskHook,
  TimeFormatter,
  TimeGranularity,
} from '@superset-ui/core';
import { ColorFormatters } from '@superset-ui/chart-controls';
import { QueryMode } from '../../consts';

export type CustomFormatter = (value: DataRecordValue) => string;

export type TableColumnConfig = {
  d3NumberFormat?: string;
  d3SmallNumberFormat?: string;
  d3TimeFormat?: string;
  columnWidth?: number;
  horizontalAlign?: 'left' | 'right' | 'center';
  showCellBars?: boolean;
  alignPositiveNegative?: boolean;
  colorPositiveNegative?: boolean;
  truncateLongCells?: boolean;
  currencyFormat?: Currency;
};

export interface DataColumnMeta {
  key: string;
  label: string;
  dataType: GenericDataType;
  formatter?:
    | TimeFormatter
    | NumberFormatter
    | CustomFormatter
    | CurrencyFormatter;
  isMetric?: boolean;
  isPercentMetric?: boolean;
  isNumeric?: boolean;
  config?: TableColumnConfig;
}

/*-----------------------------------------*/

export type StraightTableOptionsProps = {
  tableTimestampFormat?: string;
  pageLength?: string | number | null;
  includeSearch?: boolean;
  showCellBars?: boolean;
  alignPn?: boolean;
  colorPn?: boolean;
  allowRearrangeColumns?: boolean;
  columnConfig?: Record<string, TableColumnConfig>;
  conditionalFormatting?: ColorFormatters;
};

export type StraightTableFormData = QueryFormData &
  StraightTableOptionsProps & {
    queryMode?: QueryMode;
    groupby?: QueryFormMetric[] | null;
    timeGrainSqla?: TimeGranularity;
    metrics?: QueryFormMetric[] | null;
    allColumns?: QueryFormMetric[] | null;
    percentMetrics?: QueryFormMetric[] | null;
    timeseriesLimitMetric?: QueryFormMetric[] | QueryFormMetric | null;
    orderByCols?: string;
    serverPagination?: boolean;
    rowLimit?: number;
    serverPageLength?: number;
    orderDesc?: boolean;
    showTotals?: boolean;
  };

export interface StraightTableStylesProps {}

export interface StraightTableTransformedProps {
  isRawRecords?: boolean;
  totals?: DataRecord;
  columns?: DataColumnMeta[];
  serverPagination?: boolean;
  metrics?: (keyof DataRecord)[];
  percentMetrics?: QueryFormMetric[] | null;
  serverPaginationData?: { pageSize?: number; currentPage?: number };
  setDataMask?: SetDataMaskHook;
  alignPositiveNegative?: boolean;
  colorPositiveNegative?: boolean;
  showCellBars?: boolean;
  sortDesc?: boolean;
  includeSearch?: boolean;
  rowCount?: number;
  pageSize?: number;
  filters?: DataRecordFilters;
  emitCrossFilters?: boolean;
  onChangeFilter?: ChartProps['hooks']['onAddFilter'];
  columnColorFormatters?: ColorFormatters;
  timeGrain?: TimeGranularity;
  allowRearrangeColumns?: boolean;
  onContextMenu?: (
    clientX: number,
    clientY: number,
    filters?: ContextMenuFilters,
  ) => void;
}

export type StraightTableProps = ChartProps & {
  ownCurrentState?: {
    pageSize?: number;
    currentPage?: number;
  };
  rawFormData?: StraightTableFormData;
  queriesData?: ChartDataResponseResult[];
};
