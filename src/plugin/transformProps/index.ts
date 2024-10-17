import { TableType } from '../../consts';
import { PaulzTableFormData, PaulzTableProps } from '../../types';
import { getTableType } from '../../utils';
import { getPivotProps, getStraightProps } from './props';

const transformProps = (chartProps: PaulzTableProps) => {
  const { formData, width, height } = chartProps;

  const tableType = getTableType(formData as PaulzTableFormData);

  let transformedProps = { width, height };

  if (tableType === TableType.straight) {
    transformedProps = { ...transformedProps, ...getStraightProps(chartProps) };
  }
  if (tableType === TableType.pivot) {
    transformedProps = { ...transformedProps, ...getPivotProps(chartProps) };
  }

  console.log('transformedProps', transformedProps);

  return transformedProps;
};

export default transformProps;
