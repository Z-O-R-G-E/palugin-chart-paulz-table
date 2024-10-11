import {
  ControlPanelsContainerProps,
  ControlSetItem,
} from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import { PAGE_SIZE_OPTIONS } from '../../../../consts';
import { isStraightType } from '../../../../utils';

export const pageLength: ControlSetItem = {
  name: 'pageLength',
  config: {
    type: 'SelectControl',
    freeForm: true,
    renderTrigger: true,
    label: t('Page length'),
    default: null,
    choices: PAGE_SIZE_OPTIONS,
    description: t('Rows per page, 0 means no pagination'),
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      !controls?.serverPagination?.value && isStraightType({ controls }),
  },
};
