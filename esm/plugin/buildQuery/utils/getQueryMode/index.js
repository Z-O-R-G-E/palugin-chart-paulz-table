import { QueryMode } from '../../../controlPanel/consts';
export var getQueryMode = formData => {
  var {
    query_mode: mode
  } = formData;
  if (mode === QueryMode.aggregate || mode === QueryMode.raw) {
    return mode;
  }
  var rawColumns = formData == null ? void 0 : formData.all_columns;
  var hasRawColumns = rawColumns && rawColumns.length > 0;
  return hasRawColumns ? QueryMode.raw : QueryMode.aggregate;
};