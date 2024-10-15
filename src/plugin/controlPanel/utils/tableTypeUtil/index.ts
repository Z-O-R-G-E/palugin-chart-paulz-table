import {
  ControlPanelsContainerProps,
  ControlStateMapping,
} from '@superset-ui/chart-controls';
import { TableType } from 'plugins/plugin-chart-paulz-table/src/consts';

export function getTableType(controls: ControlStateMapping): TableType {
  const type = controls?.tableType?.value;
  if (type === TableType.straight || type === TableType.pivot) {
    return type as TableType;
  }

  return TableType.straight;
}

export function isTableType(type: TableType) {
  return ({ controls }: Pick<ControlPanelsContainerProps, 'controls'>) =>
    getTableType(controls) === type;
}

export const isStraightType = isTableType(TableType.straight);
export const isPivotType = isTableType(TableType.pivot);
