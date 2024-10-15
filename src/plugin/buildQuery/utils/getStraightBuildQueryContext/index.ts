import {
  AdhocColumn,
  BuildQuery,
  PostProcessingRule,
  QueryObject,
  buildQueryContext,
  ensureIsArray,
  getMetricLabel,
  isPhysicalColumn,
  removeDuplicates,
} from '@superset-ui/core';
import { PaulzTableFormData } from '../../../../types';
import { getQueryMode } from '../../utils';
import { QueryMode } from '../../../controlPanel/consts';
import { updateExternalFormData } from 'plugins/plugin-chart-paulz-table/src/utils';

export const getStraightBuildQueryContext: BuildQuery = (
  formData: PaulzTableFormData,
  options,
) => {
  const {
    percentMetrics: percentMetrics,
    orderDesc: orderDesc = false,
    extra_form_data,
  } = formData;
  const queryMode = getQueryMode(formData);
  const sortByMetric = ensureIsArray(formData.timeseries_limit_metric)[0];
  const time_grain_sqla =
    extra_form_data?.time_grain_sqla || formData.time_grain_sqla;
  let formDataCopy = formData;
  // never include time in raw records mode
  if (queryMode === QueryMode.raw) {
    formDataCopy = {
      ...formData,
      includeTime: false,
    };
  }

  return buildQueryContext(formDataCopy, baseQueryObject => {
    let { metrics, orderby = [], columns = [] } = baseQueryObject;
    let postProcessing: PostProcessingRule[] = [];

    if (queryMode === QueryMode.aggregate) {
      metrics = metrics || [];

      if (sortByMetric) {
        orderby = [[sortByMetric, !orderDesc]];
      } else if (metrics?.length > 0) {
        orderby = [[metrics[0], false]];
      }

      if (percentMetrics && percentMetrics.length > 0) {
        const percentMetricLabels = removeDuplicates(
          percentMetrics.map(getMetricLabel),
        );
        metrics = removeDuplicates(
          metrics.concat(percentMetrics),
          getMetricLabel,
        );
        postProcessing = [
          {
            operation: 'contribution',
            options: {
              columns: percentMetricLabels,
              rename_columns: percentMetricLabels.map(x => `%${x}`),
            },
          },
        ];
      }

      columns = columns.map(col => {
        if (
          isPhysicalColumn(col) &&
          time_grain_sqla &&
          formData?.temporal_columns_lookup?.[col]
        ) {
          return {
            timeGrain: time_grain_sqla,
            columnType: 'BASE_AXIS',
            sqlExpression: col,
            label: col,
            expressionType: 'SQL',
          } as AdhocColumn;
        }
        return col;
      });
    }

    const moreProps: Partial<QueryObject> = {};
    const ownState = options?.ownState ?? {};
    if (formDataCopy.server_pagination) {
      moreProps.row_limit =
        ownState.pageSize ?? formDataCopy.server_page_length;
      moreProps.row_offset =
        (ownState.currentPage ?? 0) * (ownState.pageSize ?? 0);
    }

    let queryObject = {
      ...baseQueryObject,
      columns,
      orderby,
      metrics,
      post_processing: postProcessing,
      ...moreProps,
    };

    if (
      formData.server_pagination &&
      options?.extras?.cachedChanges?.[formData.slice_id] &&
      JSON.stringify(options?.extras?.cachedChanges?.[formData.slice_id]) !==
        JSON.stringify(queryObject.filters)
    ) {
      queryObject = { ...queryObject, row_offset: 0 };
      updateExternalFormData(
        options?.hooks?.setDataMask,
        0,
        queryObject.row_limit ?? 0,
      );
    }
    // Because we use same buildQuery for all table on the page we need split them by id
    options?.hooks?.setCachedChanges({
      [formData.slice_id]: queryObject.filters,
    });

    const extraQueries: QueryObject[] = [];
    if (
      metrics?.length &&
      formData.show_totals &&
      queryMode === QueryMode.aggregate
    ) {
      extraQueries.push({
        ...queryObject,
        columns: [],
        row_limit: 0,
        row_offset: 0,
        post_processing: [],
        order_desc: undefined, // we don't need orderby stuff here,
        orderby: undefined, // because this query will be used for get total aggregation.
      });
    }

    const interactiveGroupBy = formData.extra_form_data?.interactive_groupby;
    if (interactiveGroupBy && queryObject.columns) {
      queryObject.columns = [
        ...new Set([...queryObject.columns, ...interactiveGroupBy]),
      ];
    }

    if (formData.server_pagination) {
      return [
        { ...queryObject },
        {
          ...queryObject,
          row_limit: 0,
          row_offset: 0,
          post_processing: [],
          is_rowcount: true,
        },
        ...extraQueries,
      ];
    }

    return [queryObject, ...extraQueries];
  });
};
