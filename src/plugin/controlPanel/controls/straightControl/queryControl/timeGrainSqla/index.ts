import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import {
  ensureIsArray,
  isAdhocColumn,
  isPhysicalColumn,
} from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const timeGrainSqla: ControlSetItem = {
  name: 'timeGrainSqla',
  config: {
    ...sharedControls.time_grain_sqla,
    visibility: ({ controls }) => {
      const dttmLookup = Object.fromEntries(
        ensureIsArray(controls?.groupby?.options).map(option => [
          option.column_name,
          option.is_dttm,
        ]),
      );

      return (
        ensureIsArray(controls?.groupby.value)
          .map(selection => {
            if (isAdhocColumn(selection)) {
              return true;
            }
            if (isPhysicalColumn(selection)) {
              return !!dttmLookup[selection];
            }
            return false;
          })
          .some(Boolean) &&
        isStraightType({ controls }) &&
        isStraightType({ controls })
      );
    },
  },
};
