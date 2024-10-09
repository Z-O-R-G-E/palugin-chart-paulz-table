import { DataRecord, PlainObject, QueryFormData } from '@superset-ui/core';
import { TableType } from '../plugin/controlPanel/consts';
import {
  StraightTableProps,
  StraightTableTransformedProps,
} from './StraightTableTypes';
import { PivotTableProps, PivotTableTransformedProps } from './PivotTableTypes';

export type PaulzTableStylesProps = {
  height: number;
  width: number;
};

export type PaulzTableTransformedProps = StraightTableTransformedProps &
  PivotTableTransformedProps;

export type PaulzTableFormData = QueryFormData &
  PaulzTableStylesProps &
  PaulzTableTransformedProps & { tableType?: TableType };

export type PaulzTableProps = PivotTableProps &
  StraightTableProps &
  PaulzTableStylesProps &
  PaulzTableTransformedProps &
  TableProps;

export interface TableProps {
  data: DataRecord[];
  configs: PlainObject;
}
