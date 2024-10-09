function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { buildQueryContext, ensureIsArray, getMetricLabel, isPhysicalColumn, removeDuplicates } from '@superset-ui/core';
import { updateExternalFormData } from '../../utils';
import { QueryMode } from '../controlPanel/consts';
import { getQueryMode } from './utils';
var buildQuery = (formData, options) => {
  var {
    percentMetrics: percentMetrics,
    orderDesc = false,
    extra_form_data
  } = formData;
  var queryMode = getQueryMode(formData);
  var sortByMetric = ensureIsArray(formData.timeseries_limit_metric)[0];
  var time_grain_sqla = (extra_form_data == null ? void 0 : extra_form_data.time_grain_sqla) || formData.time_grain_sqla;
  var formDataCopy = formData;
  // never include time in raw records mode
  if (queryMode === QueryMode.raw) {
    formDataCopy = _extends({}, formData, {
      includeTime: false
    });
  }
  return buildQueryContext(formDataCopy, baseQueryObject => {
    var _options$ownState, _options$extras, _options$extras2, _options$hooks2, _metrics2, _formData$extra_form_;
    var {
      metrics,
      orderby = [],
      columns = []
    } = baseQueryObject;
    var postProcessing = [];
    if (queryMode === QueryMode.aggregate) {
      var _metrics;
      metrics = metrics || [];
      if (sortByMetric) {
        orderby = [[sortByMetric, !orderDesc]];
      } else if (((_metrics = metrics) == null ? void 0 : _metrics.length) > 0) {
        orderby = [[metrics[0], false]];
      }
      if (percentMetrics && percentMetrics.length > 0) {
        var percentMetricLabels = removeDuplicates(percentMetrics.map(getMetricLabel));
        metrics = removeDuplicates(metrics.concat(percentMetrics), getMetricLabel);
        postProcessing = [{
          operation: 'contribution',
          options: {
            columns: percentMetricLabels,
            rename_columns: percentMetricLabels.map(x => "%" + x)
          }
        }];
      }
      columns = columns.map(col => {
        var _formData$temporal_co;
        if (isPhysicalColumn(col) && time_grain_sqla && formData != null && (_formData$temporal_co = formData.temporal_columns_lookup) != null && _formData$temporal_co[col]) {
          return {
            timeGrain: time_grain_sqla,
            columnType: 'BASE_AXIS',
            sqlExpression: col,
            label: col,
            expressionType: 'SQL'
          };
        }
        return col;
      });
    }
    var moreProps = {};
    var ownState = (_options$ownState = options == null ? void 0 : options.ownState) != null ? _options$ownState : {};
    if (formDataCopy.server_pagination) {
      var _ownState$pageSize, _ownState$currentPage, _ownState$pageSize2;
      moreProps.row_limit = (_ownState$pageSize = ownState.pageSize) != null ? _ownState$pageSize : formDataCopy.server_page_length;
      moreProps.row_offset = ((_ownState$currentPage = ownState.currentPage) != null ? _ownState$currentPage : 0) * ((_ownState$pageSize2 = ownState.pageSize) != null ? _ownState$pageSize2 : 0);
    }
    var queryObject = _extends({}, baseQueryObject, {
      columns,
      orderby,
      metrics,
      post_processing: postProcessing
    }, moreProps);
    if (formData.server_pagination && options != null && (_options$extras = options.extras) != null && (_options$extras = _options$extras.cachedChanges) != null && _options$extras[formData.slice_id] && JSON.stringify(options == null || (_options$extras2 = options.extras) == null || (_options$extras2 = _options$extras2.cachedChanges) == null ? void 0 : _options$extras2[formData.slice_id]) !== JSON.stringify(queryObject.filters)) {
      var _options$hooks, _queryObject$row_limi;
      queryObject = _extends({}, queryObject, {
        row_offset: 0
      });
      updateExternalFormData(options == null || (_options$hooks = options.hooks) == null ? void 0 : _options$hooks.setDataMask, 0, (_queryObject$row_limi = queryObject.row_limit) != null ? _queryObject$row_limi : 0);
    }
    // Because we use same buildQuery for all table on the page we need split them by id
    options == null || (_options$hooks2 = options.hooks) == null || _options$hooks2.setCachedChanges({
      [formData.slice_id]: queryObject.filters
    });
    var extraQueries = [];
    if ((_metrics2 = metrics) != null && _metrics2.length && formData.show_totals && queryMode === QueryMode.aggregate) {
      extraQueries.push(_extends({}, queryObject, {
        columns: [],
        row_limit: 0,
        row_offset: 0,
        post_processing: [],
        order_desc: undefined,
        // we don't need orderby stuff here,
        orderby: undefined // because this query will be used for get total aggregation.
      }));
    }
    var interactiveGroupBy = (_formData$extra_form_ = formData.extra_form_data) == null ? void 0 : _formData$extra_form_.interactive_groupby;
    if (interactiveGroupBy && queryObject.columns) {
      queryObject.columns = [...new Set([...queryObject.columns, ...interactiveGroupBy])];
    }
    if (formData.server_pagination) {
      return [_extends({}, queryObject), _extends({}, queryObject, {
        row_limit: 0,
        row_offset: 0,
        post_processing: [],
        is_rowcount: true
      }), ...extraQueries];
    }
    return [queryObject, ...extraQueries];
  });
};
export var cachedBuildQuery = () => {
  var cachedChanges = {};
  var setCachedChanges = newChanges => {
    cachedChanges = _extends({}, cachedChanges, newChanges);
  };
  return (formData, options) => {
    var _options$ownState2;
    return buildQuery(_extends({}, formData), {
      extras: {
        cachedChanges
      },
      ownState: (_options$ownState2 = options == null ? void 0 : options.ownState) != null ? _options$ownState2 : {},
      hooks: _extends({}, options == null ? void 0 : options.hooks, {
        setDataMask: () => {},
        setCachedChanges
      })
    });
  };
};
export default cachedBuildQuery();