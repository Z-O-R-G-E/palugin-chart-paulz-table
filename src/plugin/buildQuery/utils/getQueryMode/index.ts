import { QueryMode } from '../../../controlPanel/consts';
import { StraightTableFormData } from '../../../../types/StraightTableTypes';

export const getQueryMode = (formData: StraightTableFormData) => {
  const { query_mode: mode } = formData;
  if (mode === QueryMode.aggregate || mode === QueryMode.raw) {
    return mode;
  }
  const rawColumns = formData?.all_columns;
  const hasRawColumns = rawColumns && rawColumns.length > 0;
  return hasRawColumns ? QueryMode.raw : QueryMode.aggregate;
};
