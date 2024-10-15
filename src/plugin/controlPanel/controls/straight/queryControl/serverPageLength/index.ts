import {
  ControlPanelsContainerProps,
  ControlSetItem,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { PAGE_SIZE_OPTIONS } from '../../../../consts';

export const serverPageLength: ControlSetItem = {
  name: 'serverPageLength',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Количество строк на странице (серверное)'),
    default: 10,
    choices: PAGE_SIZE_OPTIONS,
    description: t(
      'Количество строк на странице, 0 означает отсутствие нумерации страниц.',
    ),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      Boolean(controls?.serverPagination?.value),
  },
};
