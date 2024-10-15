import { TableType } from '../../consts';
import { PaulzTableFormData } from '../../types';

export function getTableType(formData: PaulzTableFormData): TableType {
  const { tableType: type } = formData;
  if (type === TableType.pivot || type === TableType.straight) {
    return type;
  }

  return TableType.straight;
}
