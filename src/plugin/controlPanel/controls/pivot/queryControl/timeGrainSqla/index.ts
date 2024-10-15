import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import {
  ensureIsArray,
  isAdhocColumn,
  isPhysicalColumn,
  t,
} from '@superset-ui/core';

export const timeGrainSqla: ControlSetItem = {
  name: 'timeGrainSqla',
  config: {
    ...sharedControls.time_grain_sqla,
    label: t('Гранулярность времени SQLa'),
    visibility: ({ controls }) => {
      const dttmLookup = Object.fromEntries(
        ensureIsArray(controls?.groupbyColumns?.options).map(option => [
          option.column_name,
          option.is_dttm,
        ]),
      );

      return [
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
        .some(Boolean);
    },
  },
};
