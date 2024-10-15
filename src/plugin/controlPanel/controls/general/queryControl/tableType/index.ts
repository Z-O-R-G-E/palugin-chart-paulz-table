import { ControlConfig, ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { getTableType } from '../../../../utils';
import { TableType } from '../../../../../../consts';
import { TableTypeLabel } from '../../../../consts';

export const tableType: ControlSetItem = {
  name: 'tableType',
  config: {
    type: 'RadioButtonControl',
    label: t('Тип таблицы'),
    default: null,
    options: [
      [TableType.straight, TableTypeLabel[TableType.straight]],
      [TableType.pivot, TableTypeLabel[TableType.pivot]],
    ],
    mapStateToProps: ({ controls }) => ({ value: getTableType(controls) }),
  } as ControlConfig<'RadioButtonControl'>,
};
