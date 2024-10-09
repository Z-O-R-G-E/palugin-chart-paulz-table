import { t } from '@superset-ui/core';
import { TableType, TableTypeLabel } from '../../../../consts';
import { getTableType } from '../../../../utils';
export var tableType = {
  name: 'table_type',
  config: {
    type: 'RadioButtonControl',
    label: t('Тип таблицы'),
    default: null,
    options: [[TableType.straight, TableTypeLabel[TableType.straight]], [TableType.pivot, TableTypeLabel[TableType.pivot]]],
    mapStateToProps: _ref => {
      var {
        controls
      } = _ref;
      return {
        value: getTableType(controls)
      };
    }
  }
};