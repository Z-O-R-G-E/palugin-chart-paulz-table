import {
  ControlPanelsContainerProps,
  ControlSetItem,
} from '@superset-ui/chart-controls';
import {isStraightType} from "../../../../utils";

export const rowLimit: ControlSetItem = {
  name: 'row_limit',
  override: {
    default: 1000,
    visibility: ({ controls }: ControlPanelsContainerProps) =>
      !controls?.server_pagination?.value && isStraightType({ controls }),
  },
};
