import { TableType } from '../../consts';
import {
  PaulzTableFormData,
  PaulzTableProps,
  PaulzTableTransformedProps,
} from '../../types';
import { getTableType } from '../../utils';
import { getPivotProps, getStraightProps } from './props';

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
