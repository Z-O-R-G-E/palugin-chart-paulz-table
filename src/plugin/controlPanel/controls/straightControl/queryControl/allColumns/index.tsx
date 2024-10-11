import React from 'react';

import {
  ColumnOption,
  ControlSetItem,
  sharedControls,
} from '@superset-ui/chart-controls';
import { ensureIsArray, t } from '@superset-ui/core';

import { getQueryMode, isRawMode, isStraightType } from '../../../../utils';

export const allColumns: ControlSetItem = {
  name: 'allColumns',
  config: {
    ...sharedControls.groupby,
    label: t('Columns'),
    description: t('Columns to display'),
    multi: true,
    freeForm: true,
    allowAll: true,
    commaChoosesOption: false,
    optionRenderer: column => <ColumnOption showType column={column} />,
    valueRenderer: column => <ColumnOption column={column} />,
    valueKey: 'column_name',
    mapStateToProps: ({ datasource, controls }, controlState) => ({
      options: datasource?.columns || [],
      queryMode: getQueryMode(controls),
      externalValidationErrors:
        isRawMode({ controls }) &&
        ensureIsArray(controlState?.value).length === 0
          ? [t('must have a value')]
          : [],
    }),
    visibility: ({ controls }) => {
      return isRawMode({ controls }) && isStraightType({ controls });
    },
    resetOnHide: false,
  } as typeof sharedControls.groupby,
};
