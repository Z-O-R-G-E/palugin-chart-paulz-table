import {
  ControlPanelsContainerProps,
  ControlSetItem,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

import { PAGE_SIZE_OPTIONS } from '../../../../consts';
import { isStraightType } from '../../../../utils';

export const serverPageLength: ControlSetItem = {
  name: 'serverPageLength',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Server Page Length'),
    default: 10,
    choices: PAGE_SIZE_OPTIONS,
    description: t('Rows per page, 0 means no pagination'),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      Boolean(controls?.serverPagination?.value) &&
      isStraightType({ controls }),
  },
};
