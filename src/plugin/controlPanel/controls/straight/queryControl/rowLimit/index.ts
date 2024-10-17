import {
  ControlPanelsContainerProps,
  ControlSetItem,
  sharedControls,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const rowLimit: ControlSetItem = {
  name: 'rowLimit',
  config: {
    ...sharedControls.row_limit,
    label: t('Лимит строк'),
    description: t(
      'Ограничивает количество строк, вычисляемых в запросе, который является источником данных, используемых для этой диаграммы.',
    ),
    default: 1000,
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      !controls?.serverPagination?.value,
  },
};
