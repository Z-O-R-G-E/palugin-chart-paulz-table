import { TableType } from '../../../controlPanel/consts';
export function getTableType(formData) {
  var {
    tableType: type
  } = formData;
  if (type === TableType.pivot || type === TableType.straight) {
    return type;
  }
  return TableType.straight;
}