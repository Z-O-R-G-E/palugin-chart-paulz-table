import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import React from 'react';

export const colOrder: ControlSetItem = {
  name: 'colOrder',
  config: {
    type: 'SelectControl',
    label: t('Сортировать столбцы по'),
    default: 'key_a_to_z',
    choices: [
      // [value, label]
      ['key_a_to_z', t('Ключ от А до Я')],
      ['key_z_to_a', t('Ключ от Я до А')],
      ['value_a_to_z', t('Значение по возрастанию')],
      ['value_z_to_a', t('Значение по убыванию')],
    ],
    renderTrigger: true,
    description: (
      <>
        <div>{t('Изменить порядок столбцов.')}</div>
        <div>{t('Доступные режимы сортировки:')}</div>
        <ul>
          <li>
            {t(
              'По ключу: используйте имена столбцов в качестве ключа сортировки.',
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
