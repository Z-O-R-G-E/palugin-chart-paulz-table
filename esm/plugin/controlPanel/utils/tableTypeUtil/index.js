import { TableType } from '../../consts';
export function getTableType(controls) {
  var _controls$table_type;
  var type = controls == null || (_controls$table_type = controls.table_type) == null ? void 0 : _controls$table_type.value;
  if (type === TableType.straight || type === TableType.pivot) {
    return type;
  }
  return TableType.straight;
}
export function isTableType(type) {
  return _ref => {
    var {
      controls
    } = _ref;
    return getTableType(controls) === type;
  };
}
export var isStraightType = isTableType(TableType.straight);
export var isPivotType = isTableType(TableType.pivot);