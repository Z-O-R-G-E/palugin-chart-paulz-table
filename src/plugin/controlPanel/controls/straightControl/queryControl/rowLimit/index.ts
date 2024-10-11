import {
  ControlPanelsContainerProps,
  ControlSetItem,
  sharedControls,
} from '@superset-ui/chart-controls';
import { isStraightType } from '../../../../utils';

export const rowLimit: ControlSetItem = {
  name: 'rowLimit',
  config: {
    ...sharedControls.row_limit,
    default: 1000,
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      !controls?.serverPagination?.value && isStraightType({ controls }),
  },
};
