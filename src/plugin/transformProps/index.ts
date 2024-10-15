import {
  PaulzTableFormData,
  PaulzTableProps,
  PaulzTableTransformedProps,
} from '../../types';
import { getTableType } from '../buildQuery/utils';
import { TableType } from '../controlPanel/consts';
import { getPivotProps, getStraightProps } from './utils';

const transformProps = (chartProps: PaulzTableProps) => {
  const { formData } = chartProps;

  const tableType = getTableType(formData as PaulzTableFormData);
  if (tableType === TableType.straight) {
    return getStraightProps(chartProps);
  }
  if (tableType === TableType.pivot) {
    return getPivotProps(chartProps);
  }
  return {} as PaulzTableTransformedProps;
};

export default transformProps;
