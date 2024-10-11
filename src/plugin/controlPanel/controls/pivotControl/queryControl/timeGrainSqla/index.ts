import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import {
  ensureIsArray,
  isAdhocColumn,
  isPhysicalColumn,
} from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const timeGrainSqla: ControlSetItem = {
  name: 'timeGrainSqla',
  config: {
    ...sharedControls.time_grain_sqla,
    visibility: ({ controls }) => {
      const dttmLookup = Object.fromEntries(
        ensureIsArray(controls?.groupbyColumns?.options).map(option => [
          option.column_name,
          option.is_dttm,
        ]),
      );

      return (
        [
          ...ensureIsArray(controls?.groupbyColumns.value),
          ...ensureIsArray(controls?.groupbyRows.value),
        ]
          .map(selection => {
            if (isAdhocColumn(selection)) {
              return true;
            }
            if (isPhysicalColumn(selection)) {
              return !!dttmLookup[selection];
            }
            return false;
          })
          .some(Boolean) && isPivotType({ controls })
      );
    },
  },
};
