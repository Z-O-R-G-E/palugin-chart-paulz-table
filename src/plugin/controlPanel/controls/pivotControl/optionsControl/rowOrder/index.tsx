import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';
import React from 'react';

export const rowOrder: ControlSetItem = {
  name: 'rowOrder',
  config: {
    type: 'SelectControl',
    label: t('Sort rows by'),
    visibility: isPivotType,
    default: 'key_a_to_z',
    choices: [
      // [value, label]
      ['key_a_to_z', t('key a-z')],
      ['key_z_to_a', t('key z-a')],
      ['value_a_to_z', t('value ascending')],
      ['value_z_to_a', t('value descending')],
    ],
    renderTrigger: true,
    description: (
      <>
        <div>{t('Change order of rows.')}</div>
        <div>{t('Available sorting modes:')}</div>
        <ul>
          <li>{t('By key: use row names as sorting key')}</li>
          <li>{t('By value: use metric values as sorting key')}</li>
        </ul>
      </>
    ),
  },
};
