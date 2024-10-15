import { getPageSize, processColumns, processDataRecords } from '../../utils';
import {
  StraightTableProps,
  StraightTableTransformedProps,
} from '../../../../types/StraightTableTypes';
import { extractTimegrain } from '@superset-ui/core';
import isEqualColumns from '../../../../utils/isEqualColumns';
import memoizeOne from 'memoize-one';
import {
  ColorFormatters,
  getColorFormatters,
} from '@superset-ui/chart-controls';
import { QueryMode } from '../../../../consts';

const memoizedProcessDataRecords = memoizeOne(processDataRecords);
const memoizedProcessColumns = memoizeOne(processColumns, isEqualColumns);
const defaultServerPaginationData = {};
const defaultColorFormatters = [] as ColorFormatters;

export const getStraightProps = (
  chartProps: StraightTableProps,
): StraightTableTransformedProps => {
  const {
    rawFormData: formData,
    queriesData = [],
    filterState,
    ownState: serverPaginationData,
    hooks: {
      onAddFilter: onChangeFilter,
      setDataMask = () => {},
      onContextMenu,
    },
    emitCrossFilters,
  } = chartProps;

  const {
    align_pn: alignPositiveNegative = true,
    color_pn: colorPositiveNegative = true,
    show_cell_bars: showCellBars = true,
    include_search: includeSearch = false,
    page_length: pageLength,
    server_pagination: serverPagination = false,
    server_page_length: serverPageLength = 10,
    order_desc: sortDesc = false,
    query_mode: queryMode,
    show_totals: showTotals,
    conditional_formatting: conditionalFormatting,
    allow_rearrange_columns: allowRearrangeColumns,
  } = formData;

  const timeGrain = extractTimegrain(formData);
  const [metrics, percentMetrics, columns] = memoizedProcessColumns(chartProps);

  let baseQuery;
  let countQuery;
  let totalQuery;
  let rowCount;

  if (serverPagination) {
    [baseQuery, countQuery, totalQuery] = queriesData;
    rowCount = (countQuery?.data?.[0]?.rowcount as number) ?? 0;
  } else {
    [baseQuery, totalQuery] = queriesData;
    rowCount = baseQuery?.rowcount ?? 0;
  }

  const data = memoizedProcessDataRecords(baseQuery?.data, columns);

  const totals =
    showTotals && queryMode === QueryMode.aggregate
      ? totalQuery?.data[0]
      : undefined;

  const columnColorFormatters =
    getColorFormatters(conditionalFormatting, data) ?? defaultColorFormatters;

  return {
    isRawRecords: queryMode === QueryMode.raw,
    totals,
    columns,
    serverPagination,
    metrics,
    percentMetrics,
    serverPaginationData: serverPagination
      ? serverPaginationData
      : defaultServerPaginationData,
    setDataMask,
    alignPositiveNegative,
    colorPositiveNegative,
    showCellBars,
    sortDesc,
    includeSearch,
    rowCount,
    pageSize: serverPagination
      ? serverPageLength
      : getPageSize(pageLength, data.length, columns.length),
    filters: filterState.filters,
    emitCrossFilters,
    onChangeFilter,
    columnColorFormatters,
    timeGrain,
    allowRearrangeColumns,
    onContextMenu,
  };
};
