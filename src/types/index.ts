import { DataRecord, QueryFormData } from '@superset-ui/core';

import {
  StraightTableFormData,
  StraightTableProps,
  StraightTableStylesProps,
  StraightTableTransformedProps,
} from './StraightTableTypes';
import {
  PivotTableFormData,
  PivotTableProps,
  PivotTableStylesProps,
  PivotTableTransformedProps,
} from './PivotTableTypes';
import { TableType } from '../consts';

export type PaulzTableFormData = QueryFormData &
  PivotTableFormData &
  StraightTableFormData & { tableType?: TableType };

export type PaulzTableStylesProps = PivotTableStylesProps &
  StraightTableStylesProps & {
    height: number;
    width: number;
  };

export type PaulzTableTransformedProps = PivotTableTransformedProps &
  StraightTableTransformedProps;

export type PaulzTableProps = PivotTableProps &
  StraightTableProps & { data: DataRecord[] };
