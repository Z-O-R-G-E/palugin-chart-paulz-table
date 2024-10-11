import {
  ControlPanelsContainerProps,
  ControlSetItem,
  sharedControls,
} from '@superset-ui/chart-controls';
import { isStraightType } from '../../../../utils';
import { t } from '@superset-ui/core';

export const rowLimit: ControlSetItem = {
  name: 'rowLimit',
  config: {
    ...sharedControls.row_limit,
    label: t('Предел строк'),
    default: 1000,
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      !controls?.serverPagination?.value && isStraightType({ controls }),
  },
};
