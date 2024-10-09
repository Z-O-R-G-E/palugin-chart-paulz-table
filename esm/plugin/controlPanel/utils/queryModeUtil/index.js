import { ensureIsArray, t } from '@superset-ui/core';
import { QueryMode } from '../../consts';
export function getQueryMode(controls) {
  var _controls$query_mode, _controls$all_columns;
  var mode = controls == null || (_controls$query_mode = controls.query_mode) == null ? void 0 : _controls$query_mode.value;
  if (mode === QueryMode.aggregate || mode === QueryMode.raw) {
    return mode;
  }
  var rawColumns = controls == null || (_controls$all_columns = controls.all_columns) == null ? void 0 : _controls$all_columns.value;
  var hasRawColumns = rawColumns && rawColumns.length > 0;
  return hasRawColumns ? QueryMode.raw : QueryMode.aggregate;
}
export function isQueryMode(mode) {
  return _ref => {
    var {
      controls
    } = _ref;
    return getQueryMode(controls) === mode;
  };
}
export var validateAggControlValues = (controls, values) => {
  var areControlsEmpty = values.every(val => ensureIsArray(val).length === 0);
  return areControlsEmpty && isAggMode({
    controls
  }) ? [t('Группировка, Метрики или Процентные метрики должны иметь значение.')] : [];
};
export var isAggMode = isQueryMode(QueryMode.aggregate);
export var isRawMode = isQueryMode(QueryMode.raw);