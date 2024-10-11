import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';
import React from 'react';

export const rowOrder: ControlSetItem = {
  name: 'rowOrder',
  config: {
    type: 'SelectControl',
    label: t('Сортировать строки по'),
    visibility: isPivotType,
    default: 'key_a_to_z',
    choices: [
      // [value, label]
      ['key_a_to_z', t('ключ от А до Я')],
      ['key_z_to_a', t('ключ от Я до А')],
      ['value_a_to_z', t('значение по возрастанию')],
      ['value_z_to_a', t('значение по убыванию')],
    ],
    renderTrigger: true,
    description: (
      <>
        <div>{t('Изменить порядок строк.')}</div>
        <div>{t('Доступные режимы сортировки:')}</div>
        <ul>
          <li>
            {t(
              'По ключу: используйте имена строк в качестве ключа сортировки.',
            )}
          </li>
          <li>
            {t(
              'По значению: используйте значения показателей в качестве ключа сортировки.',
            )}
          </li>
        </ul>
      </>
    ),
  },
};
