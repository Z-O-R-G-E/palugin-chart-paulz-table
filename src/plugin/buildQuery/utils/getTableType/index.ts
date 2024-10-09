import { PaulzTableFormData } from '../../../../types';
import { TableType } from '../../../controlPanel/consts';

export function getTableType(formData: PaulzTableFormData): TableType {
  const { tableType: type } = formData;
  if (type === TableType.pivot || type === TableType.straight) {
    return type;
  }

  return TableType.straight;
}
